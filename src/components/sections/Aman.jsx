/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
import React, { useState } from 'react';
import styled from 'styled-components';

import NavSection from '../bases/NavSection';

import AmanNav from '../nav/aman/AmanNav';
import AmanNavItem from '../nav/aman/AmanNavItem';
import AmanNavIcon from '../nav/aman/AmanNavIcon';
import AmanNavPointer from '../nav/aman/AmanNavPointer';
import AmanPointerIcon from '../nav/aman/AmanPointerIcon';

import MockupSlider from '../mockup/MockupSlider';
import MockupImage from '../mockup/MockupImage';
import MockupTitle from '../mockup/MockupTitle';

import constantList from '../../constantList';

const AmanNavSection = styled(NavSection)`
  background: #f7f5ed;
  color: #d6856d;
`;

export default () => {
  const [selected, select] = useState(0);
  return (
    <AmanNavSection>
      <AmanNav>
        {
          constantList.map((item, k) => (
            <AmanNavItem
              aria-label={item}
              selected={k}
              current={selected === k}
              onClick={() => select(k)}
            />
          ))
        }
        <AmanNavPointer>
          <AmanNavIcon viewBox="0 0 24 24">
            <AmanPointerIcon />
          </AmanNavIcon>
        </AmanNavPointer>
      </AmanNav>
      <MockupSlider>
        <MockupImage index={selected} />
        <MockupTitle>Aman</MockupTitle>
      </MockupSlider>
    </AmanNavSection>
  );
};
