export interface IPostForm {
  description: string;
  image: IPostImage
}

export interface IPostImage {
  id: string;
  url?: string | null;
  file?: File | null;
  base64Data?: string | null
}

export interface IPost {
  userId: string;
  media?: IPostImage;
  description: string;
  id: string;
}

export interface IGetPostResponse {
  data: IPost[];
  error: any;
}
