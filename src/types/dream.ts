// 수정전
export type Dream = {
  dreamId: number;
  writeTime: string;
  image: string | null;
  content: string;
};

export type SquareDream = {
  dreamId: number;
  interp: string;
  image: string;
  content: string;
};

// 수정후
export type DreamId = number;
export type WriteTime = string;
export type Image = string | null;
export type Content = string;
export type IsShared = boolean;
export type Interp = string;
export type Summary = string;

export type MyDreamSummary = {
  dreamId: DreamId;
  writeTime: WriteTime;
  image: Image;
  content: Content;
};

export type MyDreamList = MyDreamSummary[];

export type MyDreamDetail = MyDreamSummary & {
  isShared: IsShared;
  interp: Interp;
  summary: Summary;
};

// TODO: image 타입을 어떻게 처리하는게 좋을까?? 보통 이렇게 특정페이지에서는 타입이 바뀌면 어떻게 처리를 할까?
export type SharedDreamSummary = {
  dreamId: DreamId;
  image: Image;
};

export type SharedDreamList = SharedDreamSummary[];

export type SharedDreamComment = {
  commentId: number;
  content: string;
  likeCount: number;
  nickname: string;
  isOwner: boolean;
  isLiked: boolean;
};

export type SharedDreamDetail = SharedDreamList & {
  dreamId: DreamId;
  image: Image;
  content: Content;
  interp: Interp;
  summary: Summary;
  commentList: SharedDreamComment[];
};
