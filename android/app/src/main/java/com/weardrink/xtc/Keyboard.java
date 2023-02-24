package com.weardrink.xtc;

import android.content.Context;
import android.view.inputmethod.InputMethodManager;

import androidx.annotation.NonNull;

import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.logging.Logger;

public class Keyboard extends ReactContextBaseJavaModule {
    private InputMethodManager inputMethodManager;
//    private ReactContext reactContext;

    public Keyboard(ReactApplicationContext reactApplicationContext){
//        this.reactContext = reactContext;
        super(reactApplicationContext);
        Logger.getLogger("ReactNativeJS").info("Keyboard init");
        inputMethodManager = (InputMethodManager) reactApplicationContext.getSystemService(Context.INPUT_METHOD_SERVICE);
    }

    @NonNull
    @Override
    public String getName() {
        return "XTCKeyboard";
    }

    @ReactMethod
    public void showKeyboard(){
        Logger.getLogger("ReactNativeJS").info("Keyboard show");
        inputMethodManager.toggleSoftInput(0,InputMethodManager.HIDE_NOT_ALWAYS);
    }
}
