var searchIndex = {};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
searchIndex["positioned_io"] = {"doc":"This crate allows you to specify an offset for reads and writes, without changing the current\nposition in a file. This is similar to [`pread()` and `pwrite()`][pread] in C.","items":[[3,"ByteIo","positioned_io","Read or write with a given inherent byte-order.",null,null],[3,"Cursor","","Adapts a `ReadAt` or `WriteAt` into a `Read` or `Write`.",null,null],[3,"SizeCursor","","Adapts a `ReadAt` or `WriteAt` into a `Read` or `Write`, with better seeking.",null,null],[3,"Slice","","A window into another `ReatAt` or `WriteAt`.",null,null],[11,"new","","Create a new `ByteIo` from some sort of reader or writer.",0,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"deref","","",0,null],[11,"deref_mut","","",0,null],[11,"read","","",0,null],[11,"write","","",0,null],[11,"flush","","",0,null],[11,"read_at","","",0,null],[11,"write_at","","",0,null],[11,"flush","","",0,null],[11,"read_u8","","",0,null],[11,"read_i8","","",0,null],[11,"read_u16","","",0,null],[11,"read_i16","","",0,null],[11,"read_u32","","",0,null],[11,"read_i32","","",0,null],[11,"read_u64","","",0,null],[11,"read_i64","","",0,null],[11,"read_uint","","",0,null],[11,"read_int","","",0,null],[11,"read_f32","","",0,null],[11,"read_f64","","",0,null],[11,"write_u8","","",0,null],[11,"write_i8","","",0,null],[11,"write_u16","","",0,null],[11,"write_i16","","",0,null],[11,"write_u32","","",0,null],[11,"write_i32","","",0,null],[11,"write_u64","","",0,null],[11,"write_i64","","",0,null],[11,"write_uint","","",0,null],[11,"write_int","","",0,null],[11,"write_f32","","",0,null],[11,"write_f64","","",0,null],[11,"read_u8_at","","",0,null],[11,"read_i8_at","","",0,null],[11,"read_u16_at","","",0,null],[11,"read_i16_at","","",0,null],[11,"read_u32_at","","",0,null],[11,"read_i32_at","","",0,null],[11,"read_u64_at","","",0,null],[11,"read_i64_at","","",0,null],[11,"read_uint_at","","",0,null],[11,"read_int_at","","",0,null],[11,"read_f32_at","","",0,null],[11,"read_f64_at","","",0,null],[11,"write_u8_at","","",0,null],[11,"write_i8_at","","",0,null],[11,"write_u16_at","","",0,null],[11,"write_i16_at","","",0,null],[11,"write_u32_at","","",0,null],[11,"write_i32_at","","",0,null],[11,"write_u64_at","","",0,null],[11,"write_i64_at","","",0,null],[11,"write_uint_at","","",0,null],[11,"write_int_at","","",0,null],[11,"write_f32_at","","",0,null],[11,"write_f64_at","","",0,null],[11,"new_pos","","Create a new `Cursor` which starts reading at a specified offset.",1,{"inputs":[{"name":"i"},{"name":"u64"}],"output":{"name":"self"}}],[11,"new","","Create a new Cursor which starts reading at offset zero.",1,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"into_inner","","Consume `self` and yield the inner `ReadAt` or `WriteAt`.",1,null],[11,"get_ref","","Borrow the inner `ReadAt` or `WriteAt`.",1,null],[11,"get_mut","","Borrow the inner `ReadAt` or `WriteAt` mutably.",1,null],[11,"position","","Get the current read/write position.",1,null],[11,"set_position","","Set the current read/write position.",1,null],[11,"seek","","",1,null],[11,"read","","",1,null],[11,"write","","",1,null],[11,"flush","","",1,null],[11,"new_pos","","Create a new `SizeCursor` which starts reading at a specified offset.",2,{"inputs":[{"name":"i"},{"name":"u64"}],"output":{"name":"self"}}],[11,"new","","Create a new `SizeCursor` which starts reading at offset zero.",2,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"deref","","",2,null],[11,"deref_mut","","",2,null],[11,"seek","","",2,null],[11,"new","","Create a new `Slice`.",3,{"inputs":[{"name":"i"},{"name":"u64"},{"name":"option"}],"output":{"name":"self"}}],[11,"new_to_end","","Create a new `Slice` that goes to the end of `io`.",3,{"inputs":[{"name":"i"},{"name":"u64"}],"output":{"name":"result"}}],[11,"read_at","","",3,null],[11,"write_at","","",3,null],[11,"flush","","",3,null],[11,"size","","",3,null],[11,"read_at","std::fs","",4,null],[11,"write_at","","",4,null],[11,"flush","","",4,null],[11,"read_at","collections::vec","",5,null],[11,"write_at","","",5,null],[11,"flush","","",5,null],[11,"size","","",5,null],[8,"ReadBytesExt","positioned_io","Extends `ReadAt` with methods for reading numbers at offsets.",null,null],[11,"read_u8_at","","Reads an unsigned 8-bit integer at an offset.",6,null],[11,"read_i8_at","","Reads a signed 8-bit integer at an offset.",6,null],[11,"read_u16_at","","Reads an unsigned 16-bit integer at an offset.",6,null],[11,"read_i16_at","","Reads a signed 16-bit integer at an offset.",6,null],[11,"read_u32_at","","Reads an unsigned 32-bit integer at an offset.",6,null],[11,"read_i32_at","","Reads a signed 32-bit integer at an offset.",6,null],[11,"read_u64_at","","Reads an unsigned 64-bit integer at an offset.",6,null],[11,"read_i64_at","","Reads a signed 64-bit integer at an offset.",6,null],[11,"read_uint_at","","Reads an unsigned `nbytes`-bit integer at an offset.",6,null],[11,"read_int_at","","Reads a signed `nbytes`-bit integer at an offset.",6,null],[11,"read_f32_at","","Reads a single-precision floating point number at an offset.",6,null],[11,"read_f64_at","","Reads a double-precision floating point number at an offset.",6,null],[8,"WriteBytesExt","","Extends `WriteAt` with methods for writing numbers at offsets.",null,null],[11,"write_u8_at","","Writes an unsigned 8-bit integer to an offset.",7,null],[11,"write_i8_at","","Writes a signed 8-bit integer to an offset.",7,null],[11,"write_u16_at","","Writes an unsigned 16-bit integer to an offset.",7,null],[11,"write_i16_at","","Writes a signed 16-bit integer to an offset.",7,null],[11,"write_u32_at","","Writes an unsigned 32-bit integer to an offset.",7,null],[11,"write_i32_at","","Writes a signed 32-bit integer to an offset.",7,null],[11,"write_u64_at","","Writes an unsigned 64-bit integer to an offset.",7,null],[11,"write_i64_at","","Writes a signed 64-bit integer to an offset.",7,null],[11,"write_uint_at","","Writes an unsigned `nbytes`-bit integer to an offset.",7,null],[11,"write_int_at","","Writes a signed `nbytes`-bit integer to an offset.",7,null],[11,"write_f32_at","","Writes a single-precision floating point number to an offset.",7,null],[11,"write_f64_at","","Writes a double-precision floating point number to an offset.",7,null],[8,"ReadInt","","Trait for reading integers.",null,null],[10,"read_u8","","Reads an unsigned 8-bit integer.",8,null],[10,"read_i8","","Reads a signed 8-bit integer.",8,null],[10,"read_u16","","Reads an unsigned 8-bit integer.",8,null],[10,"read_i16","","Reads a signed 16-bit integer.",8,null],[10,"read_u32","","Reads an unsigned 32-bit integer.",8,null],[10,"read_i32","","Reads a signed 32-bit integer.",8,null],[10,"read_u64","","Reads an unsigned 64-bit integer.",8,null],[10,"read_i64","","Reads a signed 64-bit integer.",8,null],[10,"read_uint","","Reads an unsigned `nbytes`-bit integer.",8,null],[10,"read_int","","Reads a signed `nbytes`-bit integer.",8,null],[10,"read_f32","","Reads a single-precision floating point number.",8,null],[10,"read_f64","","Reads a double-precision floating point number.",8,null],[8,"WriteInt","","Trait for writing integers.",null,null],[10,"write_u8","","Writes an unsigned 8-bit integer.",9,null],[10,"write_i8","","Writes a signed 8-bit integer.",9,null],[10,"write_u16","","Writes an unsigned 16-bit integer.",9,null],[10,"write_i16","","Writes a signed 16-bit integer.",9,null],[10,"write_u32","","Writes an unsigned 32-bit integer.",9,null],[10,"write_i32","","Writes a signed 32-bit integer.",9,null],[10,"write_u64","","Writes an unsigned 64-bit integer.",9,null],[10,"write_i64","","Writes a signed 64-bit integer.",9,null],[10,"write_uint","","Writes an unsigned `nbytes`-bit integer.",9,null],[10,"write_int","","Writes a signed `nbytes`-bit integer.",9,null],[10,"write_f32","","Writes a single-precision floating point number.",9,null],[10,"write_f64","","Writes a double-precision floating point number.",9,null],[8,"ReadIntAt","","Trait for reading positioned integers.",null,null],[10,"read_u8_at","","Reads an unsigned 8-bit integer at an offset.",10,null],[10,"read_i8_at","","Reads a signed 8-bit integer at an offset.",10,null],[10,"read_u16_at","","Reads an unsigned 16-bit integer at an offset.",10,null],[10,"read_i16_at","","Reads a signed 16-bit integer at an offset.",10,null],[10,"read_u32_at","","Reads an unsigned 32-bit integer at an offset.",10,null],[10,"read_i32_at","","Reads a signed 32-bit integer at an offset.",10,null],[10,"read_u64_at","","Reads an unsigned 64-bit integer at an offset.",10,null],[10,"read_i64_at","","Reads a signed 64-bit integer at an offset.",10,null],[10,"read_uint_at","","Reads an unsigned `nbytes`-bit integer at an offset.",10,null],[10,"read_int_at","","Reads a signed `nbytes`-bit integer at an offset.",10,null],[10,"read_f32_at","","Reads a single-precision floating point number at an offset.",10,null],[10,"read_f64_at","","Reads a double-precision floating point number at an offset.",10,null],[8,"WriteIntAt","","Trait for writing positioned integers.",null,null],[10,"write_u8_at","","Writes an unsigned 8-bit integer to an offset.",11,null],[10,"write_i8_at","","Writes a signed 8-bit integer to an offset.",11,null],[10,"write_u16_at","","Writes an unsigned 16-bit integer to an offset.",11,null],[10,"write_i16_at","","Writes a signed 16-bit integer to an offset.",11,null],[10,"write_u32_at","","Writes an unsigned 32-bit integer to an offset.",11,null],[10,"write_i32_at","","Writes a signed 32-bit integer to an offset.",11,null],[10,"write_u64_at","","Writes an unsigned 64-bit integer to an offset.",11,null],[10,"write_i64_at","","Writes a signed 64-bit integer to an offset.",11,null],[10,"write_uint_at","","Writes an unsigned `nbytes`-bit integer to an offset.",11,null],[10,"write_int_at","","Writes a signed `nbytes`-bit integer to an offset.",11,null],[10,"write_f32_at","","Writes a single-precision floating point number to an offset.",11,null],[10,"write_f64_at","","Writes a double-precision floating point number to an offset.",11,null],[8,"ReadAt","","Trait for reading at an offset.",null,null],[10,"read_at","","Read bytes from an offset in this source into a buffer, returning how many bytes were read.",12,null],[11,"read_exact_at","","Read the exact number of bytes required to fill `buf`, from an offset.",12,null],[8,"WriteAt","","Trait for writing at an offset.",null,null],[10,"write_at","","Write a buffer at an offset, returning the number of bytes written.",13,null],[11,"write_all_at","","Write a complete buffer at an offset.",13,null],[10,"flush","","Flush this writer, ensuring that any buffered data is written.",13,null],[8,"Size","","Trait to get the size of an I/O object.",null,null],[10,"size","","Get the size of this object, in bytes.",14,null],[11,"size","std::fs","",4,null],[11,"read_u8_at","positioned_io","Reads an unsigned 8-bit integer at an offset.",6,null],[11,"read_i8_at","","Reads a signed 8-bit integer at an offset.",6,null],[11,"read_u16_at","","Reads an unsigned 16-bit integer at an offset.",6,null],[11,"read_i16_at","","Reads a signed 16-bit integer at an offset.",6,null],[11,"read_u32_at","","Reads an unsigned 32-bit integer at an offset.",6,null],[11,"read_i32_at","","Reads a signed 32-bit integer at an offset.",6,null],[11,"read_u64_at","","Reads an unsigned 64-bit integer at an offset.",6,null],[11,"read_i64_at","","Reads a signed 64-bit integer at an offset.",6,null],[11,"read_uint_at","","Reads an unsigned `nbytes`-bit integer at an offset.",6,null],[11,"read_int_at","","Reads a signed `nbytes`-bit integer at an offset.",6,null],[11,"read_f32_at","","Reads a single-precision floating point number at an offset.",6,null],[11,"read_f64_at","","Reads a double-precision floating point number at an offset.",6,null],[11,"write_u8_at","","Writes an unsigned 8-bit integer to an offset.",7,null],[11,"write_i8_at","","Writes a signed 8-bit integer to an offset.",7,null],[11,"write_u16_at","","Writes an unsigned 16-bit integer to an offset.",7,null],[11,"write_i16_at","","Writes a signed 16-bit integer to an offset.",7,null],[11,"write_u32_at","","Writes an unsigned 32-bit integer to an offset.",7,null],[11,"write_i32_at","","Writes a signed 32-bit integer to an offset.",7,null],[11,"write_u64_at","","Writes an unsigned 64-bit integer to an offset.",7,null],[11,"write_i64_at","","Writes a signed 64-bit integer to an offset.",7,null],[11,"write_uint_at","","Writes an unsigned `nbytes`-bit integer to an offset.",7,null],[11,"write_int_at","","Writes a signed `nbytes`-bit integer to an offset.",7,null],[11,"write_f32_at","","Writes a single-precision floating point number to an offset.",7,null],[11,"write_f64_at","","Writes a double-precision floating point number to an offset.",7,null]],"paths":[[3,"ByteIo"],[3,"Cursor"],[3,"SizeCursor"],[3,"Slice"],[3,"File"],[3,"Vec"],[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ReadInt"],[8,"WriteInt"],[8,"ReadIntAt"],[8,"WriteIntAt"],[8,"ReadAt"],[8,"WriteAt"],[8,"Size"]]};
initSearch(searchIndex);