/** @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @externs
 */

/**
 * @typedef {{
 *    parser: !shaka.util.Mp4Parser,
 *    partialOkay: boolean,
 *    start: number,
 *    size: number,
 *    version: ?number,
 *    flags: ?number,
 *    reader: !shaka.util.DataViewReader
 * }}
 *
 * @property {!shaka.util.Mp4Parser} parser
 *   The parser that parsed this box. The parser can be used to parse child
 *   boxes where the configuration of the current parser is needed to parsed
 *   other boxes.
 * @property {boolean} partialOkay
 *   If true, allows reading partial payloads from some boxes. If the goal is a
 *   child box, we can sometimes find it without enough data to find all child
 *   boxes. This property allows the partialOkay flag from parse() to be
 *   propagated through methods like children().
 * @property {number} start
 *   The start of this box (before the header) in the original buffer. This
 *   start position is the absolute position.
 * @property {number} size
 *   The size of this box (including the header).
 * @property {?number} version
 *   The version for a full box, null for basic boxes.
 * @property {?number} flags
 *   The flags for a full box, null for basic boxes.
 * @property {!shaka.util.DataViewReader} reader
 *   The reader for this box is only for this box. Reading or not reading to
 *   the end will have no affect on the parser reading other sibling boxes.
 * @exportDoc
 */
shaka.extern.ParsedBox;
