export interface IPostForm {
  description: string;
  image: IPostImage
}

export interface IPostImage {
  id: string;
  url: string | null;
}

export interface IPost extends IPostForm {
  userId: string;
  id: string;
}
