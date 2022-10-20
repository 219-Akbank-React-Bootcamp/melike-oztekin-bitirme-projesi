export type ListAddProps = {
  onListAdd: (values: ListAddValuesProps) => void;
  boardId: number;
  closeBtn: any;
};
export type ListAddValuesProps = {
  title: string;
  boardId: number;
  ownerId: number;
};
