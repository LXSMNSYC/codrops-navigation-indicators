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
import NavItemTitle from '../NavItemTitle';

const EtefuNavItemTitle = styled(NavItemTitle)`
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 115%;
  width: 2em;
  font-size: 1.5em;
  opacity: 0;
  color: #4fc369;
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-transform: rotate3d(0,0,1,90deg) translate3d(1em,0,0);
  transform: rotate3d(0,0,1,90deg) translate3d(1em,0,0);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  transition-timing-function: cubic-bezier(0.2,1,0.3,1);
`;

export default EtefuNavItemTitle;
