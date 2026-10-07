import { QUESTIONS } from '../data/questions';

export interface ApplicationSubmissionData {
  applicantName: string;
  answers: Record<number, string>;
  decision?: string;
}

const UNNATI_EMAIL = 'unnatisolanki400@gmail.com';

/**
 * Formats all answers into a clear, readable text report
 */
export function formatAnswersSummary(applicantName: string, answers: Record<number, string>, decision = 'YES! Best Decision Ever 💕'): string {
  const lines: string[] = [
    `❤️ UNNATI'S OFFICIAL BOYFRIEND APPLICATION RESULT ❤️`,
    `======================================================`,
    `Candidate Name: ${applicantName}`,
    `Date & Time: ${new Date().toLocaleString()}`,
    `Final Decision: ${decision}`,
    `Status: 100% Soulmate Match Approved by Unnati`,
    `======================================================\n`,
    `DETAILED ANSWERS TO ALL 10 QUESTIONS:\n`,
  ];

  QUESTIONS.forEach((q, index) => {
    const selectedOptionId = answers[q.id];
    const selectedOption = q.options.find((opt) => opt.id === selectedOptionId);
    const answerText = selectedOption ? `${selectedOption.label}` : 'Not answered';

    lines.push(`${index + 1}. ${q.title}`);
    lines.push(`   Answer chosen: ${answerText}`);
    if (selectedOption?.subtext) {
      lines.push(`   (${selectedOption.subtext})`);
    }
    lines.push('');
  });

  lines.push(`======================================================`);
  lines.push(`Sent with love to Unnati (${UNNATI_EMAIL}) ❤️`);

  return lines.join('\n');
}

/**
 * Automatically dispatches candidate answers to Unnati's email via FormSubmit
 */
export async function sendAnswersToUnnatiEmail(data: ApplicationSubmissionData): Promise<{ success: boolean; message: string }> {
  try {
    const payload: Record<string, string> = {
      _subject: `❤️ Boyfriend Application: ${data.applicantName} has completed the test for Unnati!`,
      _template: 'table',
      _captcha: 'false',
      'Candidate Name': data.applicantName,
      'Submission Time': new Date().toLocaleString(),
      'Final Proposal Response': data.decision || 'YES! Best Decision Ever 💕',
      'Target Email': UNNATI_EMAIL,
    };

    // Add each question and the candidate's chosen answer
    QUESTIONS.forEach((q, idx) => {
      const selectedOptionId = data.answers[q.id];
      const selectedOption = q.options.find((opt) => opt.id === selectedOptionId);
      const answerLabel = selectedOption ? selectedOption.label : 'N/A';
      payload[`Q${idx + 1} (${q.category.replace(/^Question \d+ of \d+ • /, '')})`] = answerLabel;
    });

    const response = await fetch(`https://formsubmit.co/ajax/${UNNATI_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { success: true, message: 'Answers sent to Unnati’s email!' };
    } else {
      return { success: false, message: 'Failed to send automatically' };
    }
  } catch (err) {
    console.warn('FormSubmit network error, fallback available', err);
    return { success: false, message: 'Network error' };
  }
}

/**
 * Generates a direct mailto URL so the candidate can also send directly from their mail app
 */
export function generateMailtoUrl(applicantName: string, answers: Record<number, string>): string {
  const subject = encodeURIComponent(`❤️ Unnati's Boyfriend Application Answers - ${applicantName}`);
  const body = encodeURIComponent(formatAnswersSummary(applicantName, answers));
  return `mailto:${UNNATI_EMAIL}?subject=${subject}&body=${body}`;
}
