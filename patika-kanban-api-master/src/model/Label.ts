import { sequelize, DataTypes, Model } from "@ooic/core";

export class Label extends Model {
  id: number;
  title: string;
}

Label.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    /* field initialization */
  },
  {
    tableName: "label",
    sequelize,
  }
);
