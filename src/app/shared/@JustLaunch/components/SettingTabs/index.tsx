'use client';
import { TabItem } from '@/app/shared/@JustLaunch/components/TabItem';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { ISettingsIntl } from '../../domain/interfaces/ISettingsIntl';
import { ProfileContent } from '../ProfileContent';
import { IPricingIntl } from '../../domain/interfaces/LandingPage/IPricingIntl';
import { PlansContent } from '../PlansContent';

interface ISettingsTabsProps {
  profile: {
    email: string;
    name: string;
  };
  intl: ISettingsIntl;
  intlPricing: IPricingIntl;
}

export function SettingsTabs({
  profile: { name, email },
  intl,
  intlPricing,
}: ISettingsTabsProps) {
  const [currentTab, setCurrentTab] = useState('tab1');

  return (
    <>
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
        <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
          <TabItem
            value='tab1'
            title={intl.tabs.item1}
            isSelected={currentTab === 'tab1'}
          />
          <TabItem
            value='tab2'
            title={intl.tabs.item2}
            isSelected={currentTab === 'tab2'}
          />
        </Tabs.List>

        {/* Profile */}
        <Tabs.Content className='TabsContent' value='tab1'>
          <ProfileContent intl={intl} profile={{ email, name }} />
        </Tabs.Content>

        {/* Plans */}
        <Tabs.Content className='TabsContent' value='tab2'>
          <PlansContent intl={intlPricing} />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}
