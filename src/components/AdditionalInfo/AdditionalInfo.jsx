import { NavLink, Outlet } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <div>
      <h2>Additional information</h2>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
