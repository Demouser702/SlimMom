import React from 'react';
import css from '../Calculator/Calculator.module.css';
import { Typography, Box, MenuList, Button } from '@mui/material';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/authSlice/authSlice';

export const Calculator = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const authState = useSelector(state => state.auth);

  const handleLogout = () => {
    console.log('Logout button clicked');
    console.log('State before logout:', authState);
    dispatch(logoutUser());
    history('/SlimMom');
  };

  const user = authState.user && authState.user.data;
  const name = user && user.name;
  const avatarUrl = user && user.avatarUrl;
  const notAllowedProducts = user?.infouser?.notAllowedProducts;
  console.log('NotAllowedProducts:', notAllowedProducts);

  const renderProductList = () => {
    return notAllowedProducts.map(product => <li key={product}>{product}</li>);
  };

  return (
    <div className={css.calculator}>
      <Box>
        <MenuList
          sx={{
            width: '80vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '20px',
            gap: '20px',
            justifyContent: 'flex-end',
          }}
        >
          <li>
            <Box
              sx={{
                borderRadius: '50%',
                padding: '2px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#9BB537',
              }}
            >
              <Box
                sx={{
                  borderRadius: '50%',
                  padding: '3px',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#FC842D',
                }}
              >
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  width={40}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
            </Box>
          </li>
          <li>
            <Typography
              sx={{
                padding: 0,
                fontFamily: 'Verdana, sans-serif',
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '1.4',
                textAlign: 'right',
                color: '#212121',
              }}
            >
              {name}
            </Typography>
          </li>
          <li>
            <HorizontalRuleRoundedIcon
              sx={{
                fontSize: 'larger',
                transform: 'rotate(90deg)',
                color: '#9b9faa',
              }}
            />
          </li>
          <li>
            <Button onClick={handleLogout}>
              <Typography
                sx={{
                  padding: 0,
                  fontFamily: 'Verdana, sans-serif',
                  fontWeight: '700',
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  color: '#9b9faa',
                }}
              >
                Exit
              </Typography>
            </Button>
          </li>
        </MenuList>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: 'Verdana, sans-serif',
            fontWeight: '700',
            fontize: '26px',
            lineHeight: '1.4',
            color: '#212121',
          }}
        >
          Summary for 13.08.2023
        </Typography>
        <MenuList
          sx={{
            width: '330px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <li className={css.list}>
            <Typography
              sx={{
                fontFamily: 'Verdana, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                letterSpacing: '0.04em',
                color: '#9b9faa',
              }}
            >
              Left
            </Typography>
            <span className={css.span}> kcal</span>
          </li>
          <li className={css.list}>
            <Typography
              sx={{
                fontFamily: 'Verdana, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                letterSpacing: '0.04em',
                color: '#9b9faa',
              }}
            >
              Consumed
            </Typography>
            <span className={css.span}> kcal</span>
          </li>
          <li className={css.list}>
            <Typography
              sx={{
                fontFamily: 'Verdana, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                letterSpacing: '0.04em',
                color: '#9b9faa',
              }}
            >
              Daily rate
            </Typography>
            <span className={css.span}> {user?.infouser?.dailyRate} kcal</span>
          </li>
          <li className={css.list}>
            <Typography
              sx={{
                fontFamily: 'Verdana, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                letterSpacing: '0.04em',
                color: '#9b9faa',
              }}
            >
              n% of normal
            </Typography>
            <span className={css.span}> kcal</span>
          </li>
        </MenuList>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: 'Verdana, sans-serif',
            fontWeight: '700',
            fontize: '26px',
            lineHeight: '1.4',
            color: '#212121',
          }}
        >
          Food not recommended
        </Typography>
        {notAllowedProducts ? (
          <MenuList
            sx={{
              width: '330px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              listStyle: 'none',
              fontFamily: 'Verdana, sans-serif',
              fontWeight: '400',
              fontSize: '14px',
              letterSpacing: '0.04em',
              color: '#9b9faa',
            }}
          >
            {renderProductList()}
          </MenuList>
        ) : (
          <Typography
            sx={{
              fontFamily: 'Verdana, sans-serif',
              fontWeight: '400',
              fontSize: '14px',
              letterSpacing: '0.04em',
              color: '#9b9faa',
            }}
          >
            Your diet will be displayed here
          </Typography>
        )}
      </Box>
    </div>
  );
};
