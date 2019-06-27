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
import styled from 'styled-components';
import NavItem from '../NavItem';
import KafaNavItemTitle from './KafaNavItemTitle';
import KafaNavItemInner from './KafaNavItemInner';
import KafaNavItemImage from './KafaNavImage';

const KafaNavItem = styled(NavItem)`
  margin: 0.5em 0;

  &.nav__item--current {
    pointer-events: none;
  }

  &:not(.nav__item--current):focus ${KafaNavItemInner},
  &:not(.nav__item--current):hover ${KafaNavItemInner} {
    opacity: 1;
  }

  &.nav__item--current ${KafaNavItemInner} {
    opacity: 1;
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
  }

  &.nav__item--current ${KafaNavItemTitle} {
    opacity: 1;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  &.nav__item--current ${KafaNavItemImage} {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
`;

export default KafaNavItem;
