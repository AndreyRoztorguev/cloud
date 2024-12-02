import MainLayout from "@/layouts/MainLayout";
import { DeletedFilesPage } from "@/pages/DeletedFiles";
import { FileRequestPage } from "@/pages/FileRequest";
import { Home } from "@/pages/Home";
import { MyFilesPage } from "@/pages/MyFiles";
import { SharedPage } from "@/pages/Shared";
import { StarredPage } from "@/pages/Starred";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="files" element={<MyFilesPage />} />
          <Route path="starred" element={<StarredPage />} />
          <Route path="request" element={<FileRequestPage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="deleted" element={<DeletedFilesPage />} />
        </Route>

        {/* <Route path="team" element={<DashboardTeam />} /> */}
        {/* <Route path="projects" element={<DashboardProjects />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
