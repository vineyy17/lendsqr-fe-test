import filter from '../assets/icons/table-filter.svg';
import '../styles/components/FilterUsers.scss';
import { Popover } from '@radix-ui/themes';
import FilterSelect from './FilterSelect';
import FilterInput from './FilterInput';
import DateInput from './DateInput';
import { useUsers } from '../hooks/useUsers';
import { useFilterStore } from '../store/filterStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilterFormData, filterSchema } from '../utils/filterSchema';
import { Controller, useForm } from 'react-hook-form';
import { standardizeDate } from '../utils/helpers';

const FilterUsers = () => {
  const { users } = useUsers();
  const { setFilteredUsers } = useFilterStore();

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FilterFormData>({
    resolver: zodResolver(filterSchema, {}, { raw: true }),
    defaultValues: {
      organization: '',
      username: '',
      email: '',
      date: null,
      phoneNumber: '',
      status: '',
    },
  });

  const organizations = [
    ...new Set(users?.map((user) => user.organization) || []),
  ];

  const onSubmit = (data: FilterFormData) => {
    if (!users) return;

    // Check if all filter criteria fields are empty or null
    const isEmptyFilter =
      !data.organization &&
      !data.username &&
      !data.email &&
      !data.phoneNumber &&
      !data.status &&
      !data.date;

    // If no filter criteria are provided, return the full list of users
    if (isEmptyFilter) {
      setFilteredUsers(users);
      return;
    }

    console.log('data', data);

    const filtered = users.filter((user) => {
      const matchesOrg =
        !data.organization || user.organization === data.organization;

      const matchesUsername =
        !data.username ||
        user.surname.toLowerCase().includes(data.username.toLowerCase());

      const matchesEmail =
        !data.email ||
        user.email.toLowerCase().includes(data.email.toLowerCase());

      const matchesPhone =
        !data.phoneNumber || `0${user.phone}`.includes(data.phoneNumber);

      const matchesStatus =
        !data.status || user.status.toLowerCase() === data.status.toLowerCase();

      const matchesDate =
        !data.date ||
        new Date(standardizeDate(user.dateJoined)).toDateString() ===
          data.date.toDateString();

      // Match criterias
      return (
        matchesOrg &&
        matchesUsername &&
        matchesEmail &&
        matchesPhone &&
        matchesStatus &&
        matchesDate
      );
    });

    setFilteredUsers(filtered);
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    reset();
    setFilteredUsers(users ?? []);
  };

  return (
    <div className="filterUsers">
      <Popover.Root>
        <Popover.Trigger>
          <img className="filterUsers__icon" src={filter} alt="filter" />
        </Popover.Trigger>
        <Popover.Content>
          <form className="filterUsers__box" onSubmit={handleSubmit(onSubmit)}>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">
                Organization
              </label>
              <Controller
                name="organization"
                control={control}
                render={({ field }) => (
                  <FilterSelect
                    {...field}
                    options={organizations.map((org) => ({
                      value: org,
                      label: org,
                    }))}
                  />
                )}
              />
              {errors.organization && (
                <span className="filterUsers__box__group__error">
                  {errors.organization.message}
                </span>
              )}
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Username</label>

              <FilterInput
                placeholder="Username"
                {...register('username')}
                id="username"
              />

              {errors.username && (
                <span className="filterUsers__box__group__error">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Email</label>

              <FilterInput
                {...register('email')}
                id="email"
                placeholder="Email"
              />

              {errors.email && (
                <span className="filterUsers__box__group__error">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Date</label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <DateInput
                    placeholder="Date"
                    selectedDate={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.date && (
                <span className="filterUsers__box__group__error">
                  {errors.date.message}
                </span>
              )}
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">
                Phone Number
              </label>

              <FilterInput
                {...register('phoneNumber')}
                id="phoneNumber"
                placeholder="Phone Number"
              />

              {errors.phoneNumber && (
                <span className="filterUsers__box__group__error">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Status</label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <FilterSelect
                    {...field}
                    options={[
                      { value: 'active', label: 'Active' },
                      { value: 'inactive', label: 'Inactive' },
                      { value: 'blacklisted', label: 'Blacklisted' },
                      { value: 'pending', label: 'Pending' },
                    ]}
                  />
                )}
              />
              {errors.status && (
                <span className="filterUsers__box__group__error">
                  {errors.status.message}
                </span>
              )}
            </div>
            <div className="filterUsers__box__flexWrapper">
              <button
                className="filterUsers__box__flexWrapper__resetButton"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="filterUsers__box__flexWrapper__filterButton"
                type="submit"
              >
                Filter
              </button>
            </div>
          </form>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default FilterUsers;
