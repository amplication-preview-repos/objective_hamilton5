import { DownloadRequest as TDownloadRequest } from "../api/downloadRequest/DownloadRequest";

export const DOWNLOADREQUEST_TITLE_FIELD = "id";

export const DownloadRequestTitle = (record: TDownloadRequest): string => {
  return record.id?.toString() || String(record.id);
};
