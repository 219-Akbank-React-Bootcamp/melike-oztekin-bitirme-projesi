export type BoardListAddProps = {
  onBoardListAdd: (values: BoardListAddValuesProps) => void;
};

export type BoardListAddValuesProps = {
  title: string;
  ownerId: number;
};

export type BoardListItemProps = {
  board: any;
  getBoardList: any;
};

export type BoardListItemValuesProps = {
  title: string;
  ownerId: number;
};
