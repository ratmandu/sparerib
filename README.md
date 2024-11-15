# sparerib
Yaesu SFL Firmware decoder

Inspired by [porkchop](https://github.com/landaire/porkchop)

Simple nodejs script that reads an encoded .SFL firmware file, splits off the header, and decodes the firmware to a plaintext file for whatever reasons one might have.

I ***HAVE NOT*** tested writing any of this firmware directly to a radio after decoding. It might work, or it might not.
I'm not responsible if you brick your radio... Use at your own risk. It probably won't set your cat on fire though, but no guarantees.

<sub>_HERE BE DRAGONS_</sub>

## Usage
``` node decode.js ENCODED_FIRMWARE.SFL ```
