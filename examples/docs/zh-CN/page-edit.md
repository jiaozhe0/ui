<!--
 * @Author: your name
 * @Date: 2021-06-23 12:01:55
 * @LastEditTime: 2021-09-03 14:29:56
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
    <fc-page-edit :page="frame1.page" :scale="0.04"></fc-page-edit>
  </el-col>
  <el-col :span="12">
    <fc-page-edit :page="page" :scale="0.04" :frame="frame"></fc-page-edit>
  </el-col>
  <el-col :span="12">
    <fc-page-edit
      :page="album"
      :scale="0.04"
      :frame="frame"
      @select-layout="test"
    ></fc-page-edit>
  </el-col>
  <el-col :span="12">
    <fc-page-edit :page="desk" :scale="0.1"></fc-page-edit>
  </el-col>
</el-row>
<script>
  export default {
    methods: {
      test(index) {
        console.log(123, index);
      }
    },
    data() {
      return {
        desk: {
          id: '0-91_0',
          layers: [
            {
              id: '1_1571*2173_2',
              fill: true,
              match: [0, 1, 0],
              layer: [
                {
                  x: 0,
                  y: 0,
                  type: 'sucai',
                  id: '46',
                  suolue_url:
                    'http://image.fangcunwuzao.com/phosee/sucai/calendar/1624947224_90466_514_suolue.jpg',
                  yuantu_url:
                    'http://image.fangcunwuzao.com/phosee/sucai/calendar/1624947224_90466_514.jpg',
                  calendar: 202101,
                  template_type: 'shu',
                  width: 1571,
                  height: 2173
                },
                {
                  x: 177,
                  y: 166,
                  width: 1216,
                  height: 1594,
                  align: 0,
                  zIndex: 1,
                  type: 'photo',
                  shape: 1,
                  id: '1_1571*2173_1_1',
                  data: {
                    scale: 1,
                    naturalH: '4928',
                    naturalW: '3264',
                    rotate: 0,
                    photoUrl: 'phosee/undefined/99920b97c7a349afa__R172275.JPG',
                    photoId: '99920b97c7a349afa',
                    shape: 1,
                    fileName: '_R172275.JPG',
                    result:
                      'https://fcwz-paiban.phosee.cn/phosee/undefined/99920b97c7a349afa__R172275.JPG?imageView2/2/w/800/h/800',
                    orientation: '',
                    date: '2021/06/20 21:41:48',
                    is_qiniu: 1,
                    company: 'admin',
                    x: 0,
                    y: 132.7285745758978,
                    width: 1216,
                    height: 1835.921568627451,
                    initialW: 1216,
                    initialH: 1835.921568627451,
                    valid: true
                  }
                }
              ],
              width: 1571,
              height: 2173,
              sucai: [],
              date: '202101'
            }
          ],
          width: 1571,
          height: 2173,
          date: '202101'
        },
        album: {
          id: '0-366_护封',
          name: '护封',
          layers: [
            {
              fill: false
            },
            {
              fill: false
            }
          ],
          width: 8835,
          height: 2421,
          isPart: true,
          partId: 528,
          bleed: [3, 3, 3, 3]
        },
        frame: {
          productSize: {
            width: 4724,
            height: 2362
          },
          border: [],
          bleed: [3, 3, 3, 3]
        },
        page: {
          id: '0-366_护封',
          name: '护封',
          isFixed: false,
          layers: [
            {
              fill: true
            }
          ],
          width: 8835,
          height: 2421,
          isPart: true,
          partId: 528,
          paper: {
            attribute_value_name: '木棉纯白艺术纸',
            attribute_value_id: 990
          },
          bleed: [3, 3, 3, 3],
          ridgeWidth: 29.5
        },
        frame1: {
          page: {
            id: '90707_0_y',
            width: 6000,
            height: 7193,
            layers: [
              {
                id: '4_6000*7193_6',
                fill: true,
                size: '270*120mm',
                layer: [
                  {
                    x: 1642,
                    y: 408,
                    id: '4_6000*7193_6_4',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1,
                    data: {
                      scale: 1,
                      naturalH: 1514,
                      naturalW: 2362,
                      rotate: 0,
                      photoUrl: 'phosee/61842/5e801de93a3e4dfd8_3.jpg',
                      photoId: '5e801de93a3e4dfd8',
                      shape: 0,
                      isUpload: true,
                      fileName: '3.jpg',
                      result:
                        'http://fcwz-paiban.phosee.cn/phosee/61842/5e801de93a3e4dfd8_3.jpg?imageView2/2/w/800/h/800',
                      date: '2020/11/08 15:32:59',
                      isQiniu: true,
                      x: 0,
                      y: 313.5461473327689,
                      width: 3189,
                      height: 2044.0922946655378,
                      initialW: 3189,
                      initialH: 2044.0922946655378,
                      invalid: false
                    }
                  },
                  {
                    x: 1170,
                    y: 2062,
                    id: '4_6000*7193_6_3',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1
                  },
                  {
                    x: 1642,
                    y: 3715,
                    id: '4_6000*7193_6_2',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1
                  },
                  {
                    x: 1170,
                    y: 5369,
                    id: '4_6000*7193_6_1',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1
                  }
                ],
                output: 'more'
              }
            ]
          },
          frame: {
            bleed: [140, 140, 140, 140],
            border: [40, 40, 40, 40],
            output: 'more'
          }
        }
      };
    }
  };
</script>
```

:::
