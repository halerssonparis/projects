import { DataTypes, Model } from "sequelize";
import { DomainRecord } from "./type";
import connection from "../../database";

interface DomainInstance extends Model<DomainRecord>, DomainRecord { }

export const DomainModel = connection.define<DomainInstance>("Domain", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  domain: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "domain",
  timestamps: false,
  underscored: true,
});
