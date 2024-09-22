import { getTranslations } from 'next-intl/server';
import { IProblemsIntl } from '../../domain/interfaces/LandingPage/IProblemsIntl';

export const useProblemsInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');

  const headerTitle = internationalization('problems.headerTitle');
  const title = internationalization('problems.title');
  const subtitle = internationalization('problems.subtitle');

  const option1Emoji = internationalization('problems.problems.option1.emoji');
  const option1Text = internationalization('problems.problems.option1.text');

  const option2Emoji = internationalization('problems.problems.option2.emoji');
  const option2Text = internationalization('problems.problems.option2.text');

  const option3Emoji = internationalization('problems.problems.option3.emoji');
  const option3Text = internationalization('problems.problems.option3.text');

  const option4Emoji = internationalization('problems.problems.option4.emoji');
  const option4Text = internationalization('problems.problems.option4.text');

  const option5Emoji = internationalization('problems.problems.option5.emoji');
  const option5Text = internationalization('problems.problems.option5.text');

  const problemsIntl: IProblemsIntl = {
    headerTitle,
    title,
    subtitle,
    problems: {
      option1: {
        text: option1Text,
        emoji: option1Emoji,
      },
      option2: {
        text: option2Text,
        emoji: option2Emoji,
      },
      option3: {
        text: option3Text,
        emoji: option3Emoji,
      },
      option4: {
        text: option4Text,
        emoji: option4Emoji,
      },
      option5: {
        text: option5Text,
        emoji: option5Emoji,
      },
    },
  };

  return {
    problemsIntl,
  };
};
