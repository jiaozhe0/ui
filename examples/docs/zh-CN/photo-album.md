<!--
 * @Author: your name
 * @Date: 2021-06-23 12:01:55
 * @LastEditTime: 2021-07-17 15:22:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/examples/docs/zh-CN/page-edit.md
-->

## PageEdit 可编辑的产品页

### 基本有法

:::demo

```html
<el-row>
  <el-col :span="12">
    <fc-photo-album :pageList="list" :scale="0.1"></fc-photo-album>
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
        is_group: 0,
        opus_id: '0-481',
        customer_id: 131,
        page_info: {
          id: '0-481',
          pagesObj: {
            '0-481_首页': {
              id: '0-481_首页',
              name: '首页',
              isFixed: true,
              layers: [
                {
                  id: '1_7087*3543_1',
                  fill: true,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 3960,
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
                        naturalH: '3000',
                        naturalW: '2001',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/3dd6c314cb9e44fb9_1 (31).jpg',
                        photoId: '3dd6c314cb9e44fb9',
                        shape: 1,
                        fileName: '1 (31).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/3dd6c314cb9e44fb9_1 (31).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '0',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 1129.2338830584706,
                        width: 2711,
                        height: 4064.467766116941,
                        initialW: 2711,
                        initialH: 4064.467766116941,
                        invalid: false
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
            '0-481_2': {
              id: '0-481_2',
              layers: [
                {
                  id: '2_3543*3543_619728',
                  fill: false,
                  match: [0, 2, 0],
                  layer: [
                    {
                      x: 180,
                      y: 582,
                      width: 1586,
                      height: 2379,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '2_3543*3543_1_2',
                      data: {
                        scale: 1,
                        naturalH: '3000',
                        naturalW: '2001',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/a9d46ad6b10a4e458_1 (34).jpg',
                        photoId: 'a9d46ad6b10a4e458',
                        shape: 1,
                        fileName: '1 (34).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/a9d46ad6b10a4e458_1 (34).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '0',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0.39650000000006,
                        y: 0,
                        width: 1586.7930000000001,
                        height: 2379,
                        initialW: 1586.7930000000001,
                        initialH: 2379,
                        invalid: true
                      }
                    },
                    {
                      x: 1777,
                      y: 582,
                      width: 1586,
                      height: 2379,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '2_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3000',
                        naturalW: '2001',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/3f6bbb2dd95148de9_1 (33).jpg',
                        photoId: '3f6bbb2dd95148de9',
                        shape: 1,
                        fileName: '1 (33).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/3f6bbb2dd95148de9_1 (33).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '0',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0.39650000000006,
                        y: 0,
                        width: 1586.7930000000001,
                        height: 2379,
                        initialW: 1586.7930000000001,
                        initialH: 2379,
                        invalid: true
                      }
                    }
                  ],
                  width: 3543,
                  height: 3543,
                  sucai: []
                },
                {
                  id: '1_3543*3543_15',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 610,
                      y: 416,
                      width: 1807,
                      height: 2711,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_3543*3543_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3000',
                        naturalW: '2001',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/1b60a37eebc44b6d9_1 (4).jpg',
                        photoId: '1b60a37eebc44b6d9',
                        shape: 1,
                        fileName: '1 (4).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/1b60a37eebc44b6d9_1 (4).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '0',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0.6184999999999263,
                        y: 0,
                        width: 1808.2369999999999,
                        height: 2711,
                        initialW: 1808.2369999999999,
                        initialH: 2711,
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
            '0-481_3': {
              id: '0-481_3',
              layers: [
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
                        naturalH: '2001',
                        naturalW: '3000',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/534c93a1f7934fd1b_1 (13).jpg',
                        photoId: '534c93a1f7934fd1b',
                        shape: 0,
                        fileName: '1 (13).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/534c93a1f7934fd1b_1 (13).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '0',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 0.22500000000002274,
                        width: 1350,
                        height: 900.45,
                        initialW: 1350,
                        initialH: 900.45,
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
                        naturalH: '3000',
                        naturalW: '2001',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/4670c69062644b758_1 (14).jpg',
                        photoId: '4670c69062644b758',
                        shape: 1,
                        fileName: '1 (14).jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/4670c69062644b758_1 (14).jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '0',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 561.9940029985007,
                        width: 1350,
                        height: 2023.9880059970014,
                        initialW: 1350,
                        initialH: 2023.9880059970014,
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
                  fill: false
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-481_4': {
              id: '0-481_4',
              layers: [
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                },
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-481_5': {
              id: '0-481_5',
              layers: [
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                },
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-481_6': {
              id: '0-481_6',
              layers: [
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                },
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-481_7': {
              id: '0-481_7',
              layers: [
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                },
                {
                  width: 3543,
                  height: 3543,
                  fill: false
                }
              ],
              width: 7086,
              height: 3543
            },
            '0-481_尾页': {
              id: '0-481_尾页',
              name: '尾页',
              isFixed: true,
              layers: [
                {
                  fill: true
                }
              ],
              width: 7087,
              height: 3543,
              isPaper: true
            }
          },
          pagesIds: [
            '0-481_首页',
            '0-481_2',
            '0-481_3',
            '0-481_4',
            '0-481_5',
            '0-481_6',
            '0-481_7',
            '0-481_尾页'
          ],
          count: 8,
          addCount: 0,
          start: 0
        }
      };
    }
  };
</script>
```

:::
