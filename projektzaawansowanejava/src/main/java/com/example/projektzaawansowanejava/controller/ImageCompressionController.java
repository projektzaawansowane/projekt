package com.example.projektzaawansowanejava.controller;

import com.example.projektzaawansowanejava.service.ImageCompressionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/compress")

public class ImageCompressionController {

    private final ImageCompressionService imageCompressionService;

    @Autowired
    public ImageCompressionController(ImageCompressionService imageCompressionService) {
        this.imageCompressionService = imageCompressionService;
    }
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.IMAGE_JPEG_VALUE)

    public ResponseEntity<?> getCompressedImage(@RequestParam MultipartFile photo, @RequestParam int width, @RequestParam int height,
                                             @RequestParam float quality){
        try{
            byte[] photoByte = imageCompressionService.compress(ImageIO.read(photo.getInputStream()), width, height, quality);
            return ResponseEntity.ok(photoByte);
        }catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }
}
