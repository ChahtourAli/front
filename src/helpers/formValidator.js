/* eslint-disable max-lines */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
import messages from 'helpers/errorMessages';
import moment from 'moment';

const Validators = {
  accepted: val => (val === true ? undefined : messages.accepted),
  futureTimeHmmaFormat: (val, allVals, props) =>
    moment(val, 'h:mma')
      .date(allVals[props.fieldDateToCompareFutureWith].date())
      .month(allVals[props.fieldDateToCompareFutureWith].month())
      .year(allVals[props.fieldDateToCompareFutureWith].year())
      .isSameOrAfter(moment())
      ? undefined
      : messages.futureTimeHmmaFormat,
  afterTimeHmmaFormatThanField: (val, allVals, props) => {
    return moment(val, 'h:mma').isSameOrAfter(
      moment(allVals[props.fieldToCompareTimeWith], 'h:mma'),
    )
      ? undefined
      : messages.afterTimeHmmaFormatThanField;
  },
  after: params => val =>
    moment.isMoment(val) && val.isAfter(params[0], 'day')
      ? undefined
      : messages.after.replace(':date', params[0].format('MM/DD/YYYY')),

  after_or_equal: params => val =>
    moment.isMoment(val) && val.isSameOrAfter(params[0], 'day')
      ? undefined
      : messages.after.replace(':date', params[0].format('MM/DD/YYYY')),
  alpha: val => (testRegex(val, /^[A-Z]*$/i) ? undefined : messages.alpha),
  alpha_space: val =>
    testRegex(val, /^[A-Z\s]*$/i) ? undefined : messages.alpha_space,
  alpha_num: val =>
    testRegex(val, /^[A-Z0-9]*$/i) ? undefined : messages.alpha_num,
  alpha_num_space: val =>
    testRegex(val, /^[A-Z0-9\s]*$/i) ? undefined : messages.alpha_num_space,
  alpha_num_dash: val =>
    testRegex(val, /^[A-Z0-9_-]*$/i) ? undefined : messages.alpha_num_dash,
  alpha_num_dash_space: val =>
    testRegex(val, /^[A-Z0-9_-\s]*$/i)
      ? undefined
      : messages.alpha_num_dash_space,
  array: val => (Array.isArray(val) ? undefined : messages.array),

  before: params => val =>
    moment.isMoment(val) && val.isBefore(params[0], 'day')
      ? undefined
      : messages.before.replace(':date', params[0].format('MM/DD/YYYY')),

  before_or_equal: params => val =>
    moment.isMoment(val) && val.isSameOrBefore(params[0], 'day')
      ? undefined
      : messages.before.replace(':date', params[0].format('MM/DD/YYYY')),

  between: params => val =>
    size(val) >= parseFloat(params[0]) && size(val) <= parseFloat(params[1])
      ? undefined
      : messages.between.replace(':min', params[0]).replace(':max', params[1]),
  boolean: val =>
    val === false || val === true ? undefined : messages.boolean,
  card_exp: val =>
    testRegex(val, /^(([0]?[1-9]{1})|([1]{1}[0-2]{1}))\s?\/\s?(\d{2}|\d{4})$/)
      ? undefined
      : messages.card_exp,
  card_num: val =>
    testRegex(val, /^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/)
      ? undefined
      : messages.card_num,
  date: val => (moment.isMoment(val) ? undefined : messages.date),

  email: val =>
    testRegex(val, /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      ? undefined
      : messages.email,
  in: params => val =>
    params.indexOf(val) > -1
      ? undefined
      : messages.in.replace(':values', toSentence(params)),
  integer: val => (testRegex(val, /^\d*$/) ? undefined : messages.integer),
  max: params => val =>
    size(val, params[1]) <= parseFloat(params[0])
      ? undefined
      : messages.max
          .replace(':max', params[0])
          .replace(':type', sizeText(params[1])),
  min8: val =>
    size(val, 'string') >= parseFloat(8)
      ? undefined
      : messages.min.replace(':min', 8).replace(':type', sizeText('string')),
  numeric: val =>
    !val || testRegex(val, /^(\d+.?\d*)?$/) ? undefined : messages.numeric,
  phone: val =>
    testRegex(
      val,
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    )
      ? undefined
      : messages.phone,
  required: val => {
    if (val instanceof Array)
      return val.length !== 0 ? undefined : messages.required;

    return val ? undefined : messages.required;
  },
  string: val => (typeof val === typeof 'string' ? undefined : messages.string),
  passwordConfirm: (val, allVals) =>
    val === allVals.password ? undefined : messages.passwordConfirm,
  url: val =>
    testRegex(val, /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i)
      ? undefined
      : messages.url,
};

const testRegex = (value, regex) => {
  return value && value.toString().match(regex) !== null;
};

const size = (val, type = 'num') => {
  // if an array or string get the length, else return the value.
  if (type === 'string' || type === undefined || type === 'array') {
    return val.length;
  }

  return parseFloat(val);
};
const toSentence = arr => {
  return (
    arr.slice(0, -2).join(', ') +
    (arr.slice(0, -2).length ? ', ' : '') +
    arr.slice(-2).join(arr.length > 2 ? ', or ' : ' or ')
  );
};

const sizeText = type => {
  if (type === 'string' || type === undefined) {
    return ' characters';
  }
  if (type === 'array') {
    return ' elements';
  }

  return '';
};

export default Validators;
