<!--
 * @Author: your name
 * @Date: 2021-06-23 12:01:55
 * @LastEditTime: 2021-07-20 12:31:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/examples/docs/zh-CN/page-edit.md
-->

## PageEdit 可编辑的产品页

### 基本有法

:::demo

```html
<el-row>
  <el-col :span="12" class="test">
    <fc-photo-album
      :pageList="list"
      :scale="0.1"
      :frame="frame"
    ></fc-photo-album>
  </el-col>
</el-row>
<script>
  export default {
    methods: {
      test(index) {
        console.log(123, index);
      }
    },
    computed: {
      list() {
        const { pagesObj, pagesIds } = this.page_info;
        return pagesIds.map(id => pagesObj[id]);
      }
    },
    data() {
      return {
        frame: {
          bleed: [3, 3, 3, 3],
          border: [],
          output: '',
          productSize: {
            height: 3543,
            width: 7086
          },
          type: 'photo_album'
        },
        is_group: 0,
        opus_id: '0-550',
        customer_id: 139,
        page_info: {
          id: '0-550',
          pagesObj: {
            '0-548_首页': {
              id: '0-548_首页',
              name: '首页',
              isFixed: true,
              layers: [
                {
                  id: '1_3543*3543_2',
                  fill: false,
                  match: [0, 0, 1],
                  layer: [
                    {
                      x: 0,
                      y: 0,
                      width: 3543,
                      height: 3543,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 2,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4016',
                        naturalW: '6016',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/6c12216e9a984b709_FCY (28).jpg',
                        photoId: '6c12216e9a984b709',
                        shape: 0,
                        fileName: 'FCY (28).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/6c12216e9a984b709_FCY (28).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/10/24 15:43:08',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 882.2211155378486,
                        y: 0,
                        width: 5307.442231075697,
                        height: 3543,
                        initialW: 5307.442231075697,
                        initialH: 3543,
                        invalid: true
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                },
                {
                  id: '1_3543*3543_14',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 298,
                      y: 298,
                      width: 2947,
                      height: 1965,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1'
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                }
              ],
              width: 7087,
              height: 3543,
              isPaper: true
            },
            '0-548_2': {
              id: '0-548_2',
              layers: [
                {
                  id: '1_3543*3543_5',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 416,
                      y: 868,
                      width: 2711,
                      height: 1807,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '1122',
                        naturalW: '1571',
                        rotate: 0,
                        photoUrl: 'phosee/undefined/bba44da93a0b41fd8_2.jpg',
                        photoId: 'bba44da93a0b41fd8',
                        shape: 0,
                        fileName: '2.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/bba44da93a0b41fd8_2.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/12/17 09:50:01',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 64.59102482495234,
                        width: 2711,
                        height: 1936.1820496499047,
                        initialW: 2711,
                        initialH: 1936.1820496499047,
                        invalid: false
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                },
                {
                  id: '1_3543*3543_5',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 416,
                      y: 868,
                      width: 2711,
                      height: 1807,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '1122',
                        naturalW: '1571',
                        rotate: 0,
                        photoUrl: 'phosee/undefined/e404a909760c4e7fb_3.jpg',
                        photoId: 'e404a909760c4e7fb',
                        shape: 0,
                        fileName: '3.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/e404a909760c4e7fb_3.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/12/17 09:50:32',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 64.59102482495234,
                        width: 2711,
                        height: 1936.1820496499047,
                        initialW: 2711,
                        initialH: 1936.1820496499047,
                        invalid: false
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-548_3': {
              id: '0-548_3',
              layers: [
                {
                  id: '1_3543*3543_2',
                  fill: false,
                  match: [0, 0, 1],
                  layer: [
                    {
                      x: 0,
                      y: 0,
                      width: 3543,
                      height: 3543,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 2,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4016',
                        naturalW: '6016',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/8de99033c37d4d4b8_FCY (20).jpg',
                        photoId: '8de99033c37d4d4b8',
                        shape: 0,
                        fileName: 'FCY (20).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/8de99033c37d4d4b8_FCY (20).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/10/24 15:43:53',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 882.2211155378486,
                        y: 0,
                        width: 5307.442231075697,
                        height: 3543,
                        initialW: 5307.442231075697,
                        initialH: 3543,
                        invalid: true
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                },
                {
                  id: '1_3543*3543_5',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 416,
                      y: 868,
                      width: 2711,
                      height: 1807,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '1122',
                        naturalW: '1571',
                        rotate: 0,
                        photoUrl: 'phosee/undefined/e404a909760c4e7fb_3.jpg',
                        photoId: 'e404a909760c4e7fb',
                        shape: 0,
                        fileName: '3.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/e404a909760c4e7fb_3.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/12/17 09:50:32',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 64.59102482495234,
                        width: 2711,
                        height: 1936.1820496499047,
                        initialW: 2711,
                        initialH: 1936.1820496499047,
                        invalid: false
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-548_4': {
              id: '0-548_4',
              layers: [
                {
                  id: '1_3543*3543_7',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 103.14653624795397,
                      y: 348.6271186440679,
                      width: 2419.8870056497176,
                      height: 1613.531715677535,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4016',
                        naturalW: '6016',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/6c12216e9a984b709_FCY (28).jpg',
                        photoId: '6c12216e9a984b709',
                        shape: 0,
                        fileName: 'FCY (28).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/6c12216e9a984b709_FCY (28).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/10/24 15:43:08',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 0,
                        width: 2419.8870056497176,
                        height: 1615.403293665104,
                        initialW: 2947,
                        initialH: 1967.279255319149,
                        invalid: true
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                },
                {
                  width: 3543,
                  height: 3543,
                  fill: false,
                  id: '9cf43313020b411f8',
                  isAdd: true,
                  layer: [
                    {
                      id: '9cf43313020b411f8_text',
                      type: 'text',
                      width: 1771.5,
                      height: 121,
                      x: 885.75,
                      y: 1721.5,
                      data: {
                        style: {
                          'font-family':
                            '-apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif',
                          'text-align': 'center',
                          'letter-spacing': '1px',
                          'font-size': '116.67px',
                          'line-height': 1,
                          color: '#000'
                        },
                        renderContent:
                          '<p style="font-family:-apple-system; Noto Sans; Helvetica Neue; Helvetica; Nimbus Sans L; Arial; Liberation Sans; PingFang SC; Hiragino Sans GB; Noto Sans CJK SC; Source Han Sans SC; Source Han Sans CN; Microsoft YaHei; Wenquanyi Micro Hei; WenQuanYi Zen Hei; ST Heiti; SimHei; WenQuanYi Zen Hei Sharp; sans-serif;text-align:center;letter-spacing:1px;font-size:116.67px;line-height:1;color:#000"><span>双击sdjfasdjflakjs ;lfk文字</span></p>'
                      }
                    }
                  ]
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-548_5': {
              id: '0-548_5',
              layers: [
                {
                  id: '1_3543*3543_3',
                  fill: false,
                  match: [0, 0, 1],
                  layer: [
                    {
                      x: 298,
                      y: 298,
                      width: 2947,
                      height: 2947,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 2,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4016',
                        naturalW: '6016',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/6c12216e9a984b709_FCY (28).jpg',
                        photoId: '6c12216e9a984b709',
                        shape: 0,
                        fileName: 'FCY (28).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/6c12216e9a984b709_FCY (28).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/10/24 15:43:08',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 733.8147410358565,
                        y: 0,
                        width: 4414.629482071713,
                        height: 2947,
                        initialW: 4414.629482071713,
                        initialH: 2947,
                        invalid: true
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                },
                {
                  id: '1_3543*3543_10',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 180,
                      y: 180,
                      width: 3183,
                      height: 2122,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4016',
                        naturalW: '6016',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/8de99033c37d4d4b8_FCY (20).jpg',
                        photoId: '8de99033c37d4d4b8',
                        shape: 0,
                        fileName: 'FCY (20).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/8de99033c37d4d4b8_FCY (20).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/10/24 15:43:53',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 1.4109042553191102,
                        width: 3183,
                        height: 2124.821808510638,
                        initialW: 3183,
                        initialH: 2124.821808510638,
                        invalid: true
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-548_6': {
              id: '0-548_6',
              layers: [
                {
                  id: '1_3543*3543_5',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 416,
                      y: 868,
                      width: 2711,
                      height: 1807,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '1122',
                        naturalW: '1571',
                        rotate: 0,
                        photoUrl: 'phosee/undefined/e404a909760c4e7fb_3.jpg',
                        photoId: 'e404a909760c4e7fb',
                        shape: 0,
                        fileName: '3.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/e404a909760c4e7fb_3.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/12/17 09:50:32',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 64.59102482495234,
                        width: 2711,
                        height: 1936.1820496499047,
                        initialW: 2711,
                        initialH: 1936.1820496499047,
                        invalid: false
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                },
                {
                  id: '2_3543*3543_258752',
                  fill: false,
                  match: [2, 0, 0],
                  layer: [
                    {
                      x: 416,
                      y: 1321,
                      width: 1350,
                      height: 900,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '2_3543*3543_1_2',
                      data: {
                        scale: 1,
                        naturalH: '1122',
                        naturalW: '1571',
                        rotate: 0,
                        photoUrl: 'phosee/undefined/bba44da93a0b41fd8_2.jpg',
                        photoId: 'bba44da93a0b41fd8',
                        shape: 0,
                        fileName: '2.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/bba44da93a0b41fd8_2.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/12/17 09:50:01',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 32.08147676639078,
                        width: 1350,
                        height: 964.1629535327816,
                        initialW: 1350,
                        initialH: 964.1629535327816,
                        invalid: true
                      }
                    },
                    {
                      x: 1777,
                      y: 1321,
                      width: 1350,
                      height: 900,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '2_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4016',
                        naturalW: '6016',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/6c12216e9a984b709_FCY (28).jpg',
                        photoId: '6c12216e9a984b709',
                        shape: 0,
                        fileName: 'FCY (28).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/6c12216e9a984b709_FCY (28).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/10/24 15:43:08',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 0.5984042553191671,
                        width: 1350,
                        height: 901.1968085106383,
                        initialW: 1350,
                        initialH: 901.1968085106383,
                        invalid: true
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-548_尾页': {
              id: '0-548_尾页',
              name: '尾页',
              isFixed: true,
              layers: [
                {
                  id: '1_7087*3543_1',
                  fill: true,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 416,
                      y: 868,
                      width: 2711,
                      height: 1806,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 0,
                      id: '1_7087*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4016',
                        naturalW: '6016',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/6c12216e9a984b709_FCY (28).jpg',
                        photoId: '6c12216e9a984b709',
                        shape: 0,
                        fileName: 'FCY (28).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/6c12216e9a984b709_FCY (28).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2020/10/24 15:43:08',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 1.8683510638297776,
                        width: 2711,
                        height: 1809.7367021276596,
                        initialW: 2711,
                        initialH: 1809.7367021276596,
                        invalid: true
                      }
                    }
                  ],
                  width: 7087,
                  height: 3543,
                  sucai: []
                }
              ],
              width: 7087,
              height: 3543,
              isPaper: true
            },
            '0-548_c64f1717decd44588': {
              id: '0-548_c64f1717decd44588',
              layers: [
                {
                  width: 3543,
                  height: 3543,
                  fill: false,
                  id: '7fb0d05ca0b140639',
                  isAdd: true,
                  layer: [
                    {
                      id: '7fb0d05ca0b140639_text',
                      type: 'text',
                      width: 2243.7390889030403,
                      height: 205,
                      x: 544.1055573059843,
                      y: 1651.4137093923473,
                      data: {
                        style: {
                          'font-family':
                            '-apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif',
                          'text-align': 'left',
                          'letter-spacing': '1px',
                          'font-size': '66.67px',
                          'line-height': 3,
                          color: '#000'
                        },
                        renderContent:
                          '<p style="font-family: -apple-system; text-align: left; letter-spacing: 1px; font-size: 66.67px; line-height: 3; color: rgb(0, 0, 0);"><span>双击添加文sdfasdfasdf字afdsafsdfsdf</span></p>',
                        height: 2243.7390889030403,
                        width: null,
                        x: null
                      }
                    }
                  ]
                },
                {
                  id: '1_3543*3543_17',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 0,
                      y: 1181,
                      width: 3543,
                      height: 2362,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_3543*3543_1_1'
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                }
              ],
              width: 7086,
              height: 3543
            }
          },
          pagesIds: [
            '0-548_首页',
            '0-548_2',
            '0-548_3',
            '0-548_4',
            '0-548_5',
            '0-548_6',
            '0-548_c64f1717decd44588',
            '0-548_尾页'
          ],
          count: 8,
          addCount: 0,
          start: 0
        }
      };
    }
  };
</script>
<style scope>
  .test {
    padding: 50px;
    border: 1px solid red;
  }
</style>
```

:::
