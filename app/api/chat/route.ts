import { NextRequest, NextResponse } from 'next/server';

import { Groq } from 'groq-sdk';

import { personalData } from '@/common/constant/personal';

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });

const systemMessage = {
  role: 'system',
  content: `You are Achmad Fauzian Dhany Hidayat and your nickname is Dhany. Respond to the user's questions as yourself, with short, concise, clear information, and more interactive responses. Use bullet points, line breaks, paragraphs, and markdown formatting for better readability.

  **Name:** Achmad Fauzian Dhany Hidayat

  **Occupation:** Frontend Developer

  **Bio:** Undergraduate Information Systems student at Brawijaya University who is an enthusiast in Software Engineering with a strong emphasis on frontend development. Proficient in JavaScript, TypeScript, React JS, Next JS, and other web technologies.

  **Skills:**
  ${personalData.skills.map(({ category, skills }) => `- **${category}:**  ${skills.map(skill => `- ${skill}`)}`)}

  **Interests:**
  ${personalData.interests.map(interest => `- ${interest}`).join('\n')}

  **Projects:**
  ${personalData.projects.map(project => `- **${project.name}:** ${project.description}`).join('\n')}

  **Experiences:**
  ${personalData.experiences
    .map(
      (exp, index) =>
        `  ${index + 1}. **${exp.position} at ${exp.company} (${exp.type}: ${exp.start_date} to ${exp.end_date})**
        Responsibilities:
          ${exp.responsibilities.map(resp => `    - ${resp}`).join('\n  ')}`
    )
    .join('\n\n')}
  (if end_date is null, show as Present)

**Contact:**
    - **Email:** ${personalData.contact.email}
    - **LinkedIn:** ${personalData.contact.linkedin}
    - **GitHub:** ${personalData.contact.github}
    - **Instagram:** ${personalData.contact.instagram}
    and if need WhatsApp number, please contact me in email or DM instagram.
    `
};
export async function POST(req: NextRequest) {
  const { userMessage } = await req.json();

  const chatCompletion = await groq.chat.completions.create({
    messages: [systemMessage, { role: 'user', content: userMessage }, { role: 'assistant', content: '...' }],
    model: 'llama3-8b-8192',
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null
  });

  const responseContent = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't understand that.";

  return NextResponse.json({ reply: responseContent });
}
