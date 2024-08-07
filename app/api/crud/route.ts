import { NextRequest, NextResponse } from 'next/server';

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const revalidate = 30;

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    try {
      const url = new URL(req.url as string); // Membuat objek URL dari req.url
      const projectId = url.searchParams.get('id');

      if (projectId) {
        // Jika ada parameter id, maka kembalikan detail proyek
        const project = await prisma.projects.findUnique({
          where: { id: Number(projectId) }
        });

        if (!project) {
          return new NextResponse(JSON.stringify({ error: 'Project not found' }), {
            status: 404,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        }

        return new NextResponse(JSON.stringify(project), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {
        // Jika tidak ada parameter id, maka kembalikan semua proyek
        const projects = await prisma.projects.findMany();
        return new NextResponse(JSON.stringify(projects), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    } catch (error) {
      console.error('Error fetching project:', error);
      return new NextResponse(JSON.stringify({ error: 'Error fetching project' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid request method' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const formData = JSON.parse(await req.text()) as Prisma.ProjectsCreateInput;
      const project = await prisma.projects.create({
        data: formData
      });
      return new NextResponse(JSON.stringify(project), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error creating project:', error);
      return new NextResponse(JSON.stringify({ error: 'Error creating project' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid request method' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  if (req.method === 'DELETE') {
    // const projects = await prisma.projects.findMany();
    const { projectId } = JSON.parse(await req.text());

    try {
      await prisma.projects.delete({
        where: { id: projectId }
      });
      return new NextResponse(JSON.stringify({ message: 'Project deleted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error deleting project:', error);
      return new NextResponse(JSON.stringify({ error: 'Error deleting project' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid request method' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  if (req.method === 'PUT') {
    try {
      const { id, ...requestData } = await req.json(); // Ambil ID proyek dan data yang akan diupdate dari body

      const updatedProject = await prisma.projects.update({
        where: { id: id },
        data: requestData // Gunakan data yang diterima dari body untuk melakukan update
      });

      return new NextResponse(JSON.stringify(updatedProject), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error updating project:', error);
      return new NextResponse(JSON.stringify({ error: 'Error updating project' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid request method' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
