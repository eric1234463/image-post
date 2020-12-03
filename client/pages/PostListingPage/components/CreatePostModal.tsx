import React, { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../../../components/Button";
import ImageUpload from "../../../components/ImageUpload";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import ModalProvider from "../../../components/ModalProvider";
import { IPostForm } from '../../../interfaces/api/post';
import styled from "../../../utils/styled";

interface ModalProps {
  isModalShow: boolean;
  onClose: React.EffectCallback;
  onConfirm: (value: IPostForm) => void;
  isConfirmButtonDisabled?: boolean;
}

const Form = styled.form`

  input, button, img {
    margin: 0.5rem 0;
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;

const schema = yup.object().shape({
  description: yup.string().required('Required Field'),
});

const CreatePostModal: FunctionComponent<ModalProps> = ({
  isModalShow,
  onClose,
  onConfirm,
}) => {
  const { register, unregister, handleSubmit, watch, setValue, formState, errors } = useForm<IPostForm>({
    defaultValues: {
      description: '',
      image: {
        file: null,
        base64Data: null,
      }
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleConfirm = (value: IPostForm) => {
    onConfirm(value);
    onClose();
    unregister('image[file]');
    unregister('image[base64Data]');
  };

  const imageUrl: string = watch('image[base64Data]');

  const onFileChange = (filesData: string[], files: FileList) => {
    setValue('image[base64Data]', filesData[0], { shouldDirty: true });
    setValue('image[file]', files[0], { shouldDirty: true });
  }

  const onFileError = () => { }

  useEffect(() => {
    register('image[file]')
    register('image[base64Data]')

  }, [])

  return (
    <ModalProvider
      isModalShow={isModalShow}
      element={
        <Modal
          title={'Create A New Post'}
          onClose={onClose}
          renderFooter={() => (
            <>
              <Button
                onClick={handleSubmit(handleConfirm)}
                disabled={!formState.isDirty}
              >
                Create
              </Button>
            </>
          )}
        >
          <Form>
            <Input label="description" name="description" ref={register} value={watch('description')} error={errors.description?.message} />
            {!imageUrl && (
              <ImageUpload
                render={(onFileInputClick) => (
                  <Button type="button" onClick={onFileInputClick}>Image Upload</Button>
                )}
                onChange={onFileChange}
                onError={onFileError}
              >
              </ImageUpload>
            )}
            {imageUrl && <img src={imageUrl} />}
          </Form>
        </Modal>
      }
    />
  );
};

export default CreatePostModal;
