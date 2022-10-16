export type BoardListAddProps = {
  onBoardListAdd: (values: BoardListAddValuesProps) => void;
};

export type BoardListAddValuesProps = {
  title: string;
  ownerId: number;
};
