import React, { useRef, useImperativeHandle } from 'react';
import styled from '../../utils/styled';

type Ref =
  | ((instance: HTMLInputElement | null) => void)
  | React.MutableRefObject<HTMLInputElement | null>
  | null;

export type OnFileInputClickType = (
  event: React.MouseEvent<HTMLElement>,
) => void;

type ReactFileInputElement = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'onChange' | 'onError'
>;

export interface IProps extends ReactFileInputElement {
  render: (onFileInputClick: OnFileInputClickType) => JSX.Element;
  onChange: (filesData: string[], files: FileList) => void;
  onError: (error: Error) => void;
  accept?: string;
  allowMultiple?: boolean;
  innerRef?: Ref;
}

const FileInput = styled.input`
  display: none !important;
`;

const ImageUpload: React.FunctionComponent<IProps> = ({
  onChange,
  onError,
  render,
  accept = 'image/*',
  allowMultiple = false,
  innerRef,
}) => {
  const fileInputRef: React.RefObject<HTMLInputElement> = useRef(null);
  // @ts-ignore
  useImperativeHandle(innerRef, () => fileInputRef.current);

  const onFileInputClick: OnFileInputClickType = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      const { files } = event.target;
      const filesData: string[] = [];
      if (files && files.length > 0) {
        const fileReader = new FileReader();
        fileReader.addEventListener(
          'load',
          function onFileLoad() {
            if (fileReader.result) {
              filesData.push(fileReader.result as string);
            }
            if (filesData.length === files.length) {
              onChange(filesData, files);
            }
          },
          false,
        );
        for (let i = 0; i < files.length; i += 1) {
          fileReader.readAsDataURL(files[i]);
        }
      }
    } catch (e) {
      onError(e);
    }
  };

  return (
    <div>
      {render(onFileInputClick)}
      <FileInput
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        accept={accept}
        multiple={allowMultiple}
      />
    </div>
  );
};

export default React.forwardRef<HTMLInputElement, Omit<IProps, 'innerRef'>>(
  (props, ref) => <ImageUpload innerRef={ref} {...props} />,
);
