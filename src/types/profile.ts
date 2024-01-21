import BaseEntity from './baseEntity';

interface Profile extends BaseEntity {
  country: string;
  marketplace: string;
  profileId: string;
}

export default Profile;
