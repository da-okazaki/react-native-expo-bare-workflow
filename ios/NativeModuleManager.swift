//
//  NativeModuleManager.swift
//  ProjectName
//
//  Created by Daichi Okazaki on 2021/11/27.
//

import Foundation

@objc (NativeModuleManager)
class NativeModuleManager : NSObject {

@objc
func constantsToExport() -> [AnyHashable : Any]! {
    return ["message": "Hello from native code"]
}

}
