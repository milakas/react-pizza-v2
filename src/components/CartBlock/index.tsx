import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

import bemCreator from '../../utils/bemCreator';

const cn = bemCreator('cart-block');

function CartBlock() {
  return (
    <Grid item xs={12}>
      <div className={cn()}>
        <div className={cn('content')}>
          <div className={cn('image-wrap')}>
            <img
              className={cn('image')}
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div className={cn('wrap')}>
            <div className={cn('info')}>
              <h3 className={cn('title')}>Сырный цыпленок</h3>
              <p className={cn('description')}>тонкое тесто, 26 см.</p>
            </div>
            <div className={cn('button')}>
              <div className={cn('item-count')}>
                <ButtonGroup>
                  <Button aria-label="reduce">
                    {true ? (
                      <DeleteIcon fontSize="small" />
                    ) : (
                      <RemoveIcon fontSize="small" />
                    )}
                  </Button>
                  <div className={cn('count')}>1</div>
                  <Button aria-label="increase">
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
              <span className={cn('price')}>770 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default CartBlock;
