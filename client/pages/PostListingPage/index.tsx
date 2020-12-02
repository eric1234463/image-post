import React, { useState } from 'react'
import styled from '../../utils/styled';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { State } from '../../interfaces/state';
import { useDispatch } from '../../application/store/effects';
import ModalProvider from '../../components/ModalProvider';
import Modal from '../../components/Modal';
import CreatePostModal from './components/CreatePostModal';
import { IPostForm } from '../../interfaces/api/post';


const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  margin: 1rem 0;
  tr {

    th, td {
      border: 2px solid ${({ theme }) => theme.colors.GREY_100};

      text-align: center;
      border-radius: 4px;

      img {
        border-radius: 4px;
        width: 200px;
      }
    }
  }
`;

const PostListingPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector<State, State['user']>(state => state.user);
  const [isCreatePostModalShow, setIsCreatePostModalShow] = useState<boolean>(false);

  const onConfirm = (value: IPostForm) => {
    dispatch({
      type: 'CREATE_POST_REQUEST',
      payload: value,
    })
  }

  const onClose = () => {
    setIsCreatePostModalShow(false);
  }

  return (
    <Wrapper>
      <Button onClick={() => setIsCreatePostModalShow(true)}>Create Post</Button>
      <Table>
        <tr>
          <th>Description</th>
          <th>Image</th>
        </tr>
        <tr>
          <td>Hello World</td>
          <td><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" /></td>
        </tr>
      </Table>
      {isCreatePostModalShow && <CreatePostModal onConfirm={onConfirm} onClose={onClose} isModalShow={isCreatePostModalShow} />}
    </Wrapper>
  )
}

export default PostListingPage;
