import { DownloadRequestWhereInput } from "./DownloadRequestWhereInput";
import { DownloadRequestOrderByInput } from "./DownloadRequestOrderByInput";

export type DownloadRequestFindManyArgs = {
  where?: DownloadRequestWhereInput;
  orderBy?: Array<DownloadRequestOrderByInput>;
  skip?: number;
  take?: number;
};
