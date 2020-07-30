import assert from 'assert'
import {
    downloadFile,
    getVideoInfo,
    getVideoFormat,
    downloadM3u8,
} from '../src/support'

describe('support', () => {
    it('downloadFile', async () => {
        const res = await downloadFile({
            url: 'https://via.placeholder.com/150',
        })
        console.log(res)
        assert(res.filePath)
        await res.unlink()
    })
    it('downloadM3u8', async () => {
        const res = await downloadM3u8({
            url: 'https://v.redd.it/uag4uw003od51/HLS_270.m3u8',
        })
        // console.log(res)
        assert(res.filePath)
        await res.unlink()
    })
    it('getVideoInfo', async () => {
        const res = await getVideoInfo('./video.mp4')
        console.log(res)
    })
    it('getVideoFormat', async () => {
        var res = await getVideoFormat('./video.mp4')
        console.log(res)
        const e = await getVideoFormat('./audio.wav').catch((e) => e)
        assert(e instanceof Error)
    })
    // {
    //     streams: [
    //       {
    //         index: 0,
    //         codec_name: 'h264',
    //         codec_long_name: 'H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10',
    //         profile: 'High',
    //         codec_type: 'video',
    //         codec_time_base: '1001/48000',
    //         codec_tag_string: 'avc1',
    //         codec_tag: '0x31637661',
    //         width: 1280,
    //         height: 720,
    //         coded_width: 1280,
    //         coded_height: 720,
    //         closed_captions: 0,
    //         has_b_frames: 1,
    //         sample_aspect_ratio: '1:1',
    //         display_aspect_ratio: '16:9',
    //         pix_fmt: 'yuv420p',
    //         level: 31,
    //         color_range: 'tv',
    //         color_space: 'bt709',
    //         color_transfer: 'bt709',
    //         color_primaries: 'bt709',
    //         chroma_location: 'left',
    //         field_order: 'unknown',
    //         timecode: 'N/A',
    //         refs: 1,
    //         is_avc: 'true',
    //         nal_length_size: 4,
    //         id: 'N/A',
    //         r_frame_rate: '24000/1001',
    //         avg_frame_rate: '24000/1001',
    //         time_base: '1/24000',
    //         start_pts: 0,
    //         start_time: 0,
    //         duration_ts: 382382,
    //         duration: 15.932583,
    //         bit_rate: 2203725,
    //         max_bit_rate: 'N/A',
    //         bits_per_raw_sample: 8,
    //         nb_frames: 382,
    //         nb_read_frames: 'N/A',
    //         nb_read_packets: 'N/A',
    //         tags: [Object],
    //         disposition: [Object]
    //       },
    //       {
    //         index: 1,
    //         codec_name: 'aac',
    //         codec_long_name: 'AAC (Advanced Audio Coding)',
    //         profile: 'LC',
    //         codec_type: 'audio',
    //         codec_time_base: '1/44100',
    //         codec_tag_string: 'mp4a',
    //         codec_tag: '0x6134706d',
    //         sample_fmt: 'fltp',
    //         sample_rate: 44100,
    //         channels: 2,
    //         channel_layout: 'stereo',
    //         bits_per_sample: 0,
    //         id: 'N/A',
    //         r_frame_rate: '0/0',
    //         avg_frame_rate: '0/0',
    //         time_base: '1/44100',
    //         start_pts: 0,
    //         start_time: 0,
    //         duration_ts: 703488,
    //         duration: 15.952109,
    //         bit_rate: 128231,
    //         max_bit_rate: 'N/A',
    //         bits_per_raw_sample: 'N/A',
    //         nb_frames: 687,
    //         nb_read_frames: 'N/A',
    //         nb_read_packets: 'N/A',
    //         tags: [Object],
    //         disposition: [Object]
    //       }
    //     ],
    //     format: {
    //       filename: './video.mp4',
    //       nb_streams: 2,
    //       nb_programs: 0,
    //       format_name: 'mov,mp4,m4a,3gp,3g2,mj2',
    //       format_long_name: 'QuickTime / MOV',
    //       start_time: 0,
    //       duration: 15.952,
    //       size: 4652476,
    //       bit_rate: 2333237,
    //       probe_score: 100,
    //       tags: {
    //         major_brand: 'mp42',
    //         minor_version: '0',
    //         compatible_brands: 'isommp42',
    //         creation_time: '2019-02-01T09:00:35.000000Z',
    //         encoder: 'Google'
    //       }
    //     },
    //     chapters: []
    //   }
})
