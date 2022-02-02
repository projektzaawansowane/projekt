package com.example.projektzaawansowanejava.service;

import net.coobird.thumbnailator.Thumbnails;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

@Service
public class ImageCompressionService {

    public byte[] compress(BufferedImage originalImage, int targetWidth, int targetHeight, float quality) throws Exception{
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        Thumbnails.of(originalImage)
                .size(targetWidth, targetHeight)
                .outputFormat("JPEG")
                .outputQuality(quality)
                .toOutputStream(outputStream);
        byte[] data = outputStream.toByteArray();
        return data;
    }
}
