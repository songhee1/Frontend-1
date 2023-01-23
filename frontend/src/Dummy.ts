export interface IInstagramUser {
  id: number;
  userName: string;
  likeNum: number;
  commentNum: number;
  comments: {
    name: string;
    comment: string;
  };
}

export const Dummy: IInstagramUser[] = [
  {
    id: 1,
    userName: 'songhee',
    likeNum: 36000,
    commentNum: 36,
    comments: {
      name: 'hanheena',
      comment: 'so good it is nice to me',
    },
  },
  {
    id: 2,
    userName: 'loader',
    likeNum: 189400,
    commentNum: 360,
    comments: {
      name: 'dkskdk12',
      comment: 'i like it',
    },
  },
  {
    id: 3,
    userName: 'fobinewbi',
    likeNum: 334555,
    commentNum: 1,
    comments: {
      name: 'that will be great',
      comment: 'is this really aweeeeesome!!!',
    },
  },
  {
    id: 4,
    userName: 'songhee',
    likeNum: 36000,
    commentNum: 36,
    comments: {
      name: 'hanheena',
      comment: 'so good it is nice to me',
    },
  },
  {
    id: 5,
    userName: 'loader',
    likeNum: 189400,
    commentNum: 360,
    comments: {
      name: 'dkskdk12',
      comment: 'i like it',
    },
  },
  {
    id: 6,
    userName: 'fobinewbi',
    likeNum: 334555,
    commentNum: 1,
    comments: {
      name: 'that will be great',
      comment: 'is this really aweeeeesome!!!',
    },
  },
];
