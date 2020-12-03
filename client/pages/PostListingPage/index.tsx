import React, { useEffect, useState } from 'react'
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
  const { items } = useSelector<State, State['post']>(state => state.post);
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

  useEffect(() => {
    dispatch({
      type: 'GET_POSTS_REQUEST',
    })
  }, [])

  return (
    <Wrapper>
      <Button onClick={() => setIsCreatePostModalShow(true)}>Create Post</Button>
      <Table>

        <tr>
          <th>Description</th>
          <th>Image</th>
        </tr>

        {items.map(item => (
          <tr key={item.id}>
            <td key={item.id}>{item.description}</td>
            <td key={item.id}>{item.media && item.media.url && <img src={`/public/images/${item.media.url}`} />}</td>
          </tr>
        ))}

      </Table>
      {isCreatePostModalShow && <CreatePostModal onConfirm={onConfirm} onClose={onClose} isModalShow={isCreatePostModalShow} />}
    </Wrapper>
  )
}

export default PostListingPage;
