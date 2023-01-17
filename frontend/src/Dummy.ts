export interface IInstagramUser {
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
    userName: 'songhee',
    likeNum: 36000,
    commentNum: 36,
    comments: {
      name: 'hanheena',
      comment: 'so good it is nice to me',
    },
  },
  {
    userName: 'loader',
    likeNum: 189400,
    commentNum: 360,
    comments: {
      name: 'dkskdk12',
      comment: 'i like it',
    },
  },
  {
    userName: 'fobinewbi',
    likeNum: 334555,
    commentNum: 1,
    comments: {
      name: 'that will be great',
      comment: 'is this really aweeeeesome!!!',
    },
  },
];
