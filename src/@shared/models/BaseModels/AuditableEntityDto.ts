import { UserInfo } from "../BaseModels/UserInfo";

export class AuditableEntityDto {
  createdBy?: UserInfo;
  lastModifiedBy?: UserInfo;
}
