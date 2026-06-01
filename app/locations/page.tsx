import { Metadata } from 'next';
import ServiceLocations from '@/components/ServiceLocations';

export const metadata: Metadata = {
  title: 'Our Locations | Alpha Clean Group',
  description:
    'Find Alpha Clean Group in Sydney, Wetherill Park, Auburn, Parramatta and Silverwater. Professional cleaning services across multiple locations.',
};

export default function LocationsPage() {
  return <ServiceLocations />;
}
