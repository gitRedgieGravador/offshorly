'use strict';
import { Model, UUIDV4 } from 'sequelize';

interface CollectionAttributes {
  id: string;
  src: string;
  photographer: string;
  gcash: string;
  title: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Collection extends Model<CollectionAttributes> implements CollectionAttributes {
    id!: string;
    src!: string;
    photographer!: string;
    gcash!: string;
    title!: string;
    static associate(models: any) {
    }
  }
  Collection.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: UUIDV4 },
    src: { type: DataTypes.STRING, allowNull: false },
    photographer: { type: DataTypes.STRING, allowNull: false },
    gcash: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};