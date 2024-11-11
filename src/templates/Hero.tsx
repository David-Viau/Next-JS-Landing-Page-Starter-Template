import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Plus d&apos;informations</Link>
        </li>
        <li>
          <Link href="/">Connexion</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Simulez votre Investissement\n'}
            <span className="text-primary-500">
              Des solutions adaptées à vos objectifs.
            </span>
          </>
        }
        description="Répondez à quelques questions et découvrez des conseils
              personnalisés."
        button={
          <Link href="/">
            <Button xl>Commencer</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
