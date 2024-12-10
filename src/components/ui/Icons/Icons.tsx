import mime from "mime";
import { Box, styled, SvgIcon } from "@mui/material";
import ZIPIcon from "@/icons/folder.svg?react";
import PNGIcon from "@/icons/png-file.svg?react";
import MP4Icon from "@/icons/mp4-file.svg?react";

const BoxContainer = styled(Box)(({ theme }) => ({
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius * 2.5,
}));

const ZipFile = () => {
  return (
    <BoxContainer sx={{ backgroundColor: "brand.light" }}>
      <SvgIcon component={ZIPIcon} inheritViewBox sx={{ width: "20px" }} />
    </BoxContainer>
  );
};
const PNGFile = () => {
  return (
    <BoxContainer sx={{ backgroundColor: "hsl(28, 87%, 62%, 10%)" }}>
      <SvgIcon component={PNGIcon} inheritViewBox sx={{ width: "20px" }} />
    </BoxContainer>
  );
};

const MP4File = () => {
  return (
    <BoxContainer sx={{ backgroundColor: "hsl(284, 59%, 64%, 10%)" }}>
      <SvgIcon component={MP4Icon} inheritViewBox sx={{ width: "20px" }} />
    </BoxContainer>
  );
};

type MimeType = "application/zip" | "image/png" | "video/mp4";

const FileIcon = ({ file }: { file?: string }) => {
  const icon: Record<MimeType, JSX.Element> = {
    "application/zip": <ZipFile />,
    "image/png": <PNGFile />,
    "video/mp4": <MP4File />,
  };
  const mimeType = (file && mime.getType(file)) || "application/zip";

  return icon[mimeType as MimeType];
};

const Icons = {
  FileIcon,
};

export { Icons };
