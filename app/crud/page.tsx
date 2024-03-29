import { Metadata } from 'next';

import Breakline from '@/common/components/elements/Breakline';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

import ProjectsTable from '@/modules/projects/components/ProjectTable';
import ProjectForm from '@/modules/projects/components/ProjectsForm';

export const metadata: Metadata = {
  title: `Add Projects ${METADATA.exTitle}`,
  description: 'Add projects to show in Projects Page',
  alternates: {
    canonical: `${process.env.DOMAIN}/crud`
  }
};

const PAGE_TITLE = 'Add Projects';
const PAGE_DESCRIPTION = 'Add projects to show in Projects Page';

const AdminProjectsPage: React.FC = () => {
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectForm />
      <Breakline />
      <ProjectsTable />
    </Container>
  );
};

export default AdminProjectsPage;
