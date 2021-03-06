/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const HOST = 'https://ampbyexample.com';

/**
 * Adds default metadata to the given hash.
 */
module.exports.add = function(args) {
  const timestamp = args.timestamp;
  const fileName = args.fileName;
  const canonical = HOST + fileName;
  const logo = HOST + '/img/logo.png';
  const leader = HOST + '/img/abe_preview.png';
  const metadata = {
    datePublished: timestamp,
    dateModified: timestamp,
    fileName: fileName,
    canonical: canonical,
    logo: logo,
    logoWidth: '362',
    logoHeight: '60',
    leader: leader,
    leaderWidth: '2000',
    leaderHeight: '1336'
  };
  addMissingMetadata(args, metadata);
};

function addMissingMetadata(target, source) {
  for (const prop in source) {
    if (!target[prop]) {
      target[prop] = source[prop];
    }
  }
}

module.exports.HOST = HOST;
