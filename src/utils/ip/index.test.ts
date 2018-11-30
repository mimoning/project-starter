import * as utils from '.';

describe('Utils', () => {
  describe('isIP', () => {
    test.each`
      input   | expected
      ${'1.1.1.1.1'}   | ${false}
      ${'123123123'}   | ${false}
      ${'256.1.1.1'}   | ${false}
      ${'300.1234.41.11'} | ${false}
      ${'192.168.100.1'}  | ${true}
    `('$input is IP? $expected', ({ input, expected }) => {
      expect(utils.isIP(input)).toBe(expected);
    })
  })
  
  describe('compareIP', () => {
    test.each`
      input1   | input2   | expected
      ${'1.1.1.1'}  | ${'1.1.1.1'}   | ${'='}
      ${'1.1.2.1'}  | ${'1.1.1.1'}   | ${'>'}
      ${'1.1.1.1'}  | ${'3.1.1.1'}   | ${'<'}
      ${'110.101.121.1'}  | ${'110.100.111.21'}   | ${'>'}
    `('$input1 $expected $input2', ({ input1, input2, expected }) => {
      expect(utils.compareIP(input1, input2)).toBe(expected);
    })

    test('bad arguments', () => {
      function badArgs() {
        utils.compareIP('123213', 'asdasd')
      }
      expect(badArgs).toThrowError();
    })
  })

  describe('plusIP', () => {
    test.each`
      ip   | n   | expected
      ${'12.12.12.12'} | ${0} | ${'12.12.12.12'}
      ${'1.1.1.1'} | ${100} | ${'1.1.1.101'}
      ${'192.168.100.221'} | ${100} | ${'192.168.101.65'}
      ${'254.255.255.255'} | ${256 ** 3} | ${'255.255.255.255'}
    `('$ip plus $n equal $expected', ({ ip, n, expected }) => {
      expect(utils.plusIP(ip, n)).toBe(expected);
    })

    test('bad arguments', () => {
      function badArgs() {
        utils.plusIP('123213', 1)
      }
      expect(badArgs).toThrowError();
    })

    test('oversize computation', () => {
      function badArgs() {
        utils.plusIP('255.255.255.255', 1);
      }
      expect(badArgs).toThrowError();
    })

  })

  describe('countIP', () => {
    test.each`
      input1   | input2   | expected
      ${'1.1.1.1'}  | ${'1.1.1.1'}   | ${1}
      ${'192.168.100.181'}  | ${'192.168.100.192'}   | ${12}
      ${'10.0.23.1'}  | ${'10.0.22.191'}   | ${67}
    `('$input1 ~ $input2 has $expected IPs', ({ input1, input2, expected }) => {
      expect(utils.countIP(input1, input2)).toHaveLength(expected);
    })
    test('1.0.1.221 ~ 1.0.1.224 is [1.0.1.221, 1.0.1.222, 1.0.1.223, 1.0.1.224]', () => {
      const expected = ['1.0.1.221', '1.0.1.222', '1.0.1.223', '1.0.1.224'];
      expect(utils.countIP('1.0.1.221', '1.0.1.224')).toEqual(expected);
    })
    test('bad arguments', () => {
      function badArgs() {
        utils.countIP('123213', 'asdasd')
      }
      expect(badArgs).toThrowError();
    })
  })

})
