import { BrowserRouter } from 'react-router-dom';
import * as Layouts from "./layouts";
import { RootState } from './store'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router';
import { privateRoutes, publicRoutes } from './routes/routes';
// lightgallery scss
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  const count = useSelector((state: RootState) => state.shopping)

  if (!count.isAuthenticated) {
    return (
      <BrowserRouter>
        <Layouts.Auth>
          <Routes>
            {publicRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}
            <Route path="*" element={<Navigate to='/sign-in' />} />
          </Routes>
        </Layouts.Auth>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Layouts.Base>
        <Routes>
          {privateRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            )
          })}
          <Route path="*" element={<Navigate to='/main' />} />
        </Routes>
      </Layouts.Base>
    </BrowserRouter>
  )
}
