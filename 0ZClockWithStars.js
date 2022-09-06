serveMe = `<!doctype html>
<html>
	<head>
		<title>
			0-Z Clock
		</title>

  <style>

   * {
    box-sizing: border-box;
   }
   body {
  background: #121212ff;
  color: #efefef;

  background: linear-gradient(45deg, black, red);
}

#timeKeeper {
 font-family: monospace;
 position: absolute;
 top: 23px;
 left: 23px;
 transition: all 0.5s ease-in-out;
  z-index: 999;
}

.describer {
  position: relative;
  top: 4px;
font-style: italic;
left: 0px;
  font-weight: bold;
  text-transform: uppercase;
  border-top: 1px solid;
  width: 18px !important;
  display: inline-block;
  text-align: center;
  padding-top: 2px;
}

.describer-2nd {
  position: absolute;
  top: 24px;
  left: 0px;
  font-style: normal;
  font-size: 10px;
  font-weight: lighter;
  font-family: serif;
  text-align: center;
  line-height: 15px;
  border: 1px solid;
  border-radius: 5px;
  padding: 4px 2px 4px 2px;
  width: 12px;
}

.value {
  display: inline-block;
  width: 20px;
  border: 1px solid;
  text-align: center;
  height: 20px;
  line-height: 20px;
  border-radius: 5px 5px 0 0;
}


#dLogo {
  position: fixed;
  right: 200px;
  bottom: 0; }

#cube {
  position: absolute;
  transform-style: preserve-3d;
  width: 300px;
  height: 300px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 55s ease-in-out; }
  #cube .plane {
    transition: all 5s ease-in-out;
    background: rgba(170, 4, 4, 0.3);
    perspective: 800px;
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #090909; }

#cube > .plane:nth-child(1n + 1) {
  transform: rotateX(33deg) rotateY(66deg) rotateZ(8deg); }

#cube > .plane:nth-child(1n + 2) {
  transform: rotateX(66deg) rotateY(132deg) rotateZ(16deg); }

#cube > .plane:nth-child(1n + 3) {
  transform: rotateX(99deg) rotateY(198deg) rotateZ(24deg); }

#cube > .plane:nth-child(1n + 4) {
  transform: rotateX(132deg) rotateY(264deg) rotateZ(32deg); }

#cube > .plane:nth-child(1n + 5) {
  transform: rotateX(165deg) rotateY(330deg) rotateZ(40deg); }

#cube > .plane:nth-child(1n + 6) {
  transform: rotateX(198deg) rotateY(396deg) rotateZ(48deg); }

#cube > .plane:nth-child(1n + 7) {
  transform: rotateX(231deg) rotateY(462deg) rotateZ(56deg); }

#cube > .plane:nth-child(1n + 8) {
  transform: rotateX(264deg) rotateY(528deg) rotateZ(64deg); }

#cube > .plane:nth-child(1n + 9) {
  transform: rotateX(297deg) rotateY(594deg) rotateZ(72deg); }

#cube > .plane:nth-child(1n + 10) {
  transform: rotateX(330deg) rotateY(660deg) rotateZ(80deg); }

#cube > .plane:nth-child(1n + 11) {
  transform: rotateX(363deg) rotateY(726deg) rotateZ(88deg); }

#cube > .plane:nth-child(1n + 12) {
  transform: rotateX(396deg) rotateY(792deg) rotateZ(96deg); }

#cube > .plane:nth-child(1n + 13) {
  transform: rotateX(429deg) rotateY(858deg) rotateZ(104deg); }

#cube > .plane:nth-child(1n + 14) {
  transform: rotateX(462deg) rotateY(924deg) rotateZ(112deg); }

#cube > .plane:nth-child(1n + 15) {
  transform: rotateX(495deg) rotateY(990deg) rotateZ(120deg); }

#cube > .plane:nth-child(1n + 16) {
  transform: rotateX(528deg) rotateY(1056deg) rotateZ(128deg); }

#cube > .plane:nth-child(1n + 17) {
  transform: rotateX(561deg) rotateY(1122deg) rotateZ(136deg); }

#cube > .plane:nth-child(1n + 18) {
  transform: rotateX(594deg) rotateY(1188deg) rotateZ(144deg); }

#cube > .plane:nth-child(1n + 19) {
  transform: rotateX(627deg) rotateY(1254deg) rotateZ(152deg); }

#cube > .plane:nth-child(1n + 20) {
  transform: rotateX(660deg) rotateY(1320deg) rotateZ(160deg); }

#cube > .plane:nth-child(1n + 21) {
  transform: rotateX(693deg) rotateY(1386deg) rotateZ(168deg); }

#cube > .plane:nth-child(1n + 22) {
  transform: rotateX(726deg) rotateY(1452deg) rotateZ(176deg); }

#cube > .plane:nth-child(1n + 23) {
  transform: rotateX(759deg) rotateY(1518deg) rotateZ(184deg); }

#cube > .plane:nth-child(1n + 24) {
  transform: rotateX(792deg) rotateY(1584deg) rotateZ(192deg); }

#cube > .plane:nth-child(1n + 25) {
  transform: rotateX(825deg) rotateY(1650deg) rotateZ(200deg); }

#cube > .plane:nth-child(1n + 26) {
  transform: rotateX(858deg) rotateY(1716deg) rotateZ(208deg); }

#cube > .plane:nth-child(1n + 27) {
  transform: rotateX(891deg) rotateY(1782deg) rotateZ(216deg); }

#cube > .plane:nth-child(1n + 28) {
  transform: rotateX(924deg) rotateY(1848deg) rotateZ(224deg); }

#cube > .plane:nth-child(1n + 29) {
  transform: rotateX(957deg) rotateY(1914deg) rotateZ(232deg); }

#cube > .plane:nth-child(1n + 30) {
  transform: rotateX(990deg) rotateY(1980deg) rotateZ(240deg); }

#cube > .plane:nth-child(1n + 31) {
  transform: rotateX(1023deg) rotateY(2046deg) rotateZ(248deg); }

#cube > .plane:nth-child(1n + 32) {
  transform: rotateX(1056deg) rotateY(2112deg) rotateZ(256deg); }

#cube > .plane:nth-child(1n + 33) {
  transform: rotateX(1089deg) rotateY(2178deg) rotateZ(264deg); }

#cube > .plane:nth-child(1n + 34) {
  transform: rotateX(1122deg) rotateY(2244deg) rotateZ(272deg); }

#cube > .plane:nth-child(1n + 35) {
  transform: rotateX(1155deg) rotateY(2310deg) rotateZ(280deg); }

#cube > .plane:nth-child(1n + 36) {
  transform: rotateX(1188deg) rotateY(2376deg) rotateZ(288deg); }

#cube > .plane:nth-child(1n + 37) {
  transform: rotateX(1221deg) rotateY(2442deg) rotateZ(296deg); }

#cube > .plane:nth-child(1n + 38) {
  transform: rotateX(1254deg) rotateY(2508deg) rotateZ(304deg); }

#cube > .plane:nth-child(1n + 39) {
  transform: rotateX(1287deg) rotateY(2574deg) rotateZ(312deg); }

#cube > .plane:nth-child(1n + 40) {
  transform: rotateX(1320deg) rotateY(2640deg) rotateZ(320deg); }

#cube > .plane:nth-child(1n + 41) {
  transform: rotateX(1353deg) rotateY(2706deg) rotateZ(328deg); }

#cube > .plane:nth-child(1n + 42) {
  transform: rotateX(1386deg) rotateY(2772deg) rotateZ(336deg); }

#cube > .plane:nth-child(1n + 43) {
  transform: rotateX(1419deg) rotateY(2838deg) rotateZ(344deg); }

#cube > .plane:nth-child(1n + 44) {
  transform: rotateX(1452deg) rotateY(2904deg) rotateZ(352deg); }

#cube > .plane:nth-child(1n + 45) {
  transform: rotateX(1485deg) rotateY(2970deg) rotateZ(360deg); }

#cube > .plane:nth-child(1n + 46) {
  transform: rotateX(1518deg) rotateY(3036deg) rotateZ(368deg); }

#cube > .plane:nth-child(1n + 47) {
  transform: rotateX(1551deg) rotateY(3102deg) rotateZ(376deg); }

#cube > .plane:nth-child(1n + 48) {
  transform: rotateX(1584deg) rotateY(3168deg) rotateZ(384deg); }

#cube > .plane:nth-child(1n + 49) {
  transform: rotateX(1617deg) rotateY(3234deg) rotateZ(392deg); }

#cube > .plane:nth-child(1n + 50) {
  transform: rotateX(1650deg) rotateY(3300deg) rotateZ(400deg); }

#cube > .plane:nth-child(1n + 51) {
  transform: rotateX(1683deg) rotateY(3366deg) rotateZ(408deg); }

#cube > .plane:nth-child(1n + 52) {
  transform: rotateX(1716deg) rotateY(3432deg) rotateZ(416deg); }

#cube > .plane:nth-child(1n + 53) {
  transform: rotateX(1749deg) rotateY(3498deg) rotateZ(424deg); }

#cube > .plane:nth-child(1n + 54) {
  transform: rotateX(1782deg) rotateY(3564deg) rotateZ(432deg); }

#cube > .plane:nth-child(1n + 55) {
  transform: rotateX(1815deg) rotateY(3630deg) rotateZ(440deg); }

#cube > .plane:nth-child(1n + 56) {
  transform: rotateX(1848deg) rotateY(3696deg) rotateZ(448deg); }

#cube > .plane:nth-child(1n + 57) {
  transform: rotateX(1881deg) rotateY(3762deg) rotateZ(456deg); }

#cube > .plane:nth-child(1n + 58) {
  transform: rotateX(1914deg) rotateY(3828deg) rotateZ(464deg); }

#cube > .plane:nth-child(1n + 59) {
  transform: rotateX(1947deg) rotateY(3894deg) rotateZ(472deg); }

#cube > .plane:nth-child(1n + 60) {
  transform: rotateX(1980deg) rotateY(3960deg) rotateZ(480deg); }

#cube > .plane:nth-child(1n + 61) {
  transform: rotateX(2013deg) rotateY(4026deg) rotateZ(488deg); }

#cube > .plane:nth-child(1n + 62) {
  transform: rotateX(2046deg) rotateY(4092deg) rotateZ(496deg); }

#cube:hover > .plane:nth-child(1n + 1) {
  transform: rotateX(-53deg) rotateY(-61deg) rotateZ(-69.9deg); }

#cube:hover > .plane:nth-child(1n + 2) {
  transform: rotateX(-106deg) rotateY(-122deg) rotateZ(-139.8deg); }

#cube:hover > .plane:nth-child(1n + 3) {
  transform: rotateX(-159deg) rotateY(-183deg) rotateZ(-209.7deg); }

#cube:hover > .plane:nth-child(1n + 4) {
  transform: rotateX(-212deg) rotateY(-244deg) rotateZ(-279.6deg); }

#cube:hover > .plane:nth-child(1n + 5) {
  transform: rotateX(-265deg) rotateY(-305deg) rotateZ(-349.5deg); }

#cube:hover > .plane:nth-child(1n + 6) {
  transform: rotateX(-318deg) rotateY(-366deg) rotateZ(-419.4deg); }

#cube:hover > .plane:nth-child(1n + 7) {
  transform: rotateX(-371deg) rotateY(-427deg) rotateZ(-489.3deg); }

#cube:hover > .plane:nth-child(1n + 8) {
  transform: rotateX(-424deg) rotateY(-488deg) rotateZ(-559.2deg); }

#cube:hover > .plane:nth-child(1n + 9) {
  transform: rotateX(-477deg) rotateY(-549deg) rotateZ(-629.1deg); }

#cube:hover > .plane:nth-child(1n + 10) {
  transform: rotateX(-530deg) rotateY(-610deg) rotateZ(-699deg); }

#cube:hover > .plane:nth-child(1n + 11) {
  transform: rotateX(-583deg) rotateY(-671deg) rotateZ(-768.9deg); }

#cube:hover > .plane:nth-child(1n + 12) {
  transform: rotateX(-636deg) rotateY(-732deg) rotateZ(-838.8deg); }

#cube:hover > .plane:nth-child(1n + 13) {
  transform: rotateX(-689deg) rotateY(-793deg) rotateZ(-908.7deg); }

#cube:hover > .plane:nth-child(1n + 14) {
  transform: rotateX(-742deg) rotateY(-854deg) rotateZ(-978.6deg); }

#cube:hover > .plane:nth-child(1n + 15) {
  transform: rotateX(-795deg) rotateY(-915deg) rotateZ(-1048.5deg); }

#cube:hover > .plane:nth-child(1n + 16) {
  transform: rotateX(-848deg) rotateY(-976deg) rotateZ(-1118.4deg); }

#cube:hover > .plane:nth-child(1n + 17) {
  transform: rotateX(-901deg) rotateY(-1037deg) rotateZ(-1188.3deg); }

#cube:hover > .plane:nth-child(1n + 18) {
  transform: rotateX(-954deg) rotateY(-1098deg) rotateZ(-1258.2deg); }

#cube:hover > .plane:nth-child(1n + 19) {
  transform: rotateX(-1007deg) rotateY(-1159deg) rotateZ(-1328.1deg); }

#cube:hover > .plane:nth-child(1n + 20) {
  transform: rotateX(-1060deg) rotateY(-1220deg) rotateZ(-1398deg); }

#cube:hover > .plane:nth-child(1n + 21) {
  transform: rotateX(-1113deg) rotateY(-1281deg) rotateZ(-1467.9deg); }

#cube:hover > .plane:nth-child(1n + 22) {
  transform: rotateX(-1166deg) rotateY(-1342deg) rotateZ(-1537.8deg); }

#cube:hover > .plane:nth-child(1n + 23) {
  transform: rotateX(-1219deg) rotateY(-1403deg) rotateZ(-1607.7deg); }

#cube:hover > .plane:nth-child(1n + 24) {
  transform: rotateX(-1272deg) rotateY(-1464deg) rotateZ(-1677.6deg); }

#cube:hover > .plane:nth-child(1n + 25) {
  transform: rotateX(-1325deg) rotateY(-1525deg) rotateZ(-1747.5deg); }

#cube:hover > .plane:nth-child(1n + 26) {
  transform: rotateX(-1378deg) rotateY(-1586deg) rotateZ(-1817.4deg); }

#cube:hover > .plane:nth-child(1n + 27) {
  transform: rotateX(-1431deg) rotateY(-1647deg) rotateZ(-1887.3deg); }

#cube:hover > .plane:nth-child(1n + 28) {
  transform: rotateX(-1484deg) rotateY(-1708deg) rotateZ(-1957.2deg); }

#cube:hover > .plane:nth-child(1n + 29) {
  transform: rotateX(-1537deg) rotateY(-1769deg) rotateZ(-2027.1deg); }

#cube:hover > .plane:nth-child(1n + 30) {
  transform: rotateX(-1590deg) rotateY(-1830deg) rotateZ(-2097deg); }

#cube:hover > .plane:nth-child(1n + 31) {
  transform: rotateX(-1643deg) rotateY(-1891deg) rotateZ(-2166.9deg); }

#cube:hover > .plane:nth-child(1n + 32) {
  transform: rotateX(-1696deg) rotateY(-1952deg) rotateZ(-2236.8deg); }

#cube:hover > .plane:nth-child(1n + 33) {
  transform: rotateX(-1749deg) rotateY(-2013deg) rotateZ(-2306.7deg); }

#cube:hover > .plane:nth-child(1n + 34) {
  transform: rotateX(-1802deg) rotateY(-2074deg) rotateZ(-2376.6deg); }

#cube:hover > .plane:nth-child(1n + 35) {
  transform: rotateX(-1855deg) rotateY(-2135deg) rotateZ(-2446.5deg); }

#cube:hover > .plane:nth-child(1n + 36) {
  transform: rotateX(-1908deg) rotateY(-2196deg) rotateZ(-2516.4deg); }

#cube:hover > .plane:nth-child(1n + 37) {
  transform: rotateX(-1961deg) rotateY(-2257deg) rotateZ(-2586.3deg); }

#cube:hover > .plane:nth-child(1n + 38) {
  transform: rotateX(-2014deg) rotateY(-2318deg) rotateZ(-2656.2deg); }

#cube:hover > .plane:nth-child(1n + 39) {
  transform: rotateX(-2067deg) rotateY(-2379deg) rotateZ(-2726.1deg); }

#cube:hover > .plane:nth-child(1n + 40) {
  transform: rotateX(-2120deg) rotateY(-2440deg) rotateZ(-2796deg); }

#cube:hover > .plane:nth-child(1n + 41) {
  transform: rotateX(-2173deg) rotateY(-2501deg) rotateZ(-2865.9deg); }

#cube:hover > .plane:nth-child(1n + 42) {
  transform: rotateX(-2226deg) rotateY(-2562deg) rotateZ(-2935.8deg); }

#cube:hover > .plane:nth-child(1n + 43) {
  transform: rotateX(-2279deg) rotateY(-2623deg) rotateZ(-3005.7deg); }

#cube:hover > .plane:nth-child(1n + 44) {
  transform: rotateX(-2332deg) rotateY(-2684deg) rotateZ(-3075.6deg); }

#cube:hover > .plane:nth-child(1n + 45) {
  transform: rotateX(-2385deg) rotateY(-2745deg) rotateZ(-3145.5deg); }

#cube:hover > .plane:nth-child(1n + 46) {
  transform: rotateX(-2438deg) rotateY(-2806deg) rotateZ(-3215.4deg); }

#cube:hover > .plane:nth-child(1n + 47) {
  transform: rotateX(-2491deg) rotateY(-2867deg) rotateZ(-3285.3deg); }

#cube:hover > .plane:nth-child(1n + 48) {
  transform: rotateX(-2544deg) rotateY(-2928deg) rotateZ(-3355.2deg); }

#cube:hover > .plane:nth-child(1n + 49) {
  transform: rotateX(-2597deg) rotateY(-2989deg) rotateZ(-3425.1deg); }

#cube:hover > .plane:nth-child(1n + 50) {
  transform: rotateX(-2650deg) rotateY(-3050deg) rotateZ(-3495deg); }

#cube:hover > .plane:nth-child(1n + 51) {
  transform: rotateX(-2703deg) rotateY(-3111deg) rotateZ(-3564.9deg); }

#cube:hover > .plane:nth-child(1n + 52) {
  transform: rotateX(-2756deg) rotateY(-3172deg) rotateZ(-3634.8deg); }

#cube:hover > .plane:nth-child(1n + 53) {
  transform: rotateX(-2809deg) rotateY(-3233deg) rotateZ(-3704.7deg); }

#cube:hover > .plane:nth-child(1n + 54) {
  transform: rotateX(-2862deg) rotateY(-3294deg) rotateZ(-3774.6deg); }

#cube:hover > .plane:nth-child(1n + 55) {
  transform: rotateX(-2915deg) rotateY(-3355deg) rotateZ(-3844.5deg); }

#cube:hover > .plane:nth-child(1n + 56) {
  transform: rotateX(-2968deg) rotateY(-3416deg) rotateZ(-3914.4deg); }

#cube:hover > .plane:nth-child(1n + 57) {
  transform: rotateX(-3021deg) rotateY(-3477deg) rotateZ(-3984.3deg); }

#cube:hover > .plane:nth-child(1n + 58) {
  transform: rotateX(-3074deg) rotateY(-3538deg) rotateZ(-4054.2deg); }

#cube:hover > .plane:nth-child(1n + 59) {
  transform: rotateX(-3127deg) rotateY(-3599deg) rotateZ(-4124.1deg); }

#cube:hover > .plane:nth-child(1n + 60) {
  transform: rotateX(-3180deg) rotateY(-3660deg) rotateZ(-4194deg); }

#cube:hover > .plane:nth-child(1n + 61) {
  transform: rotateX(-3233deg) rotateY(-3721deg) rotateZ(-4263.9deg); }

#cube:hover > .plane:nth-child(1n + 62) {
  transform: rotateX(-3286deg) rotateY(-3782deg) rotateZ(-4333.8deg); }

/*# sourceMappingURL=logo.css.map */

  </style>
	</head>
	<body>
		<div id="timeKeeper">
			<span class="value">
				<span id="year52036560683837100000Counting"></span>
				<span id="year52036560683837100000CountingDescriber" class="describer">y
					<span class="describer-2nd">5
						<span class="describer-3rd">2
							<span class="describer-4th">0
								<span class="describer-5th">3
									<span class="describer-6th">6
										<span class="describer-7th">5
											<span class="describer-8th">6
												<span class="describer-9th">0
													<span class="describer-10th">6
														<span class="describer-11th">8
          					<span class="describer-12th">3
          					 <span class="describer-13th">8
          			 		 <span class="describer-14th">3
          			  	 	<span class="describer-15th">7
              					<span class="describer-16th">1
               					<span class="describer-17th">0
          				      	<span class="describer-18th">0
                  				<span class="describer-19th">0
          		        			<span class="describer-20th">0
          					         <span class="describer-21st">0
                        </span>
                       </span>
                      </span>
                     </span>
                    </span>
                   </span>
                  </span>
                 </span>
                </span>
               </span>
              </span>
             </span>
            </span>
           </span>
          </span>
         </span>
        </span>
       </span>
      </span>
     </span>
    </span>
   </span>

   <span class="value">
				<span id="year839299365868340200Counting"></span>
				<span id="year839299365868340200CountingDescriber" class="describer">y
					<span class="describer-2nd">8
      <span class="describer-3rd">3
       <span class="describer-4th">9
        <span class="describer-5th">2
         <span class="describer-6th">9
          <span class="describer-7th">9
           <span class="describer-8th">3
            <span class="describer-9th">6
             <span class="describer-10th">5
              <span class="describer-11th">8
               <span class="describer-12th">6
                <span class="describer-13th">8
                 <span class="describer-14th">3
                  <span class="describer-15th">4
                   <span class="describer-16th">0
                    <span class="describer-17th">2
                     <span class="describer-18th">0
                      <span class="describer-19th">0
                      </span>
                     </span>
                    </span>
                   </span>
                  </span>
                 </span>
                </span>
               </span>
              </span>
             </span>
            </span>
           </span>
          </span>
         </span>
        </span>
       </span>
      </span>
     </span>
    </span>
			</span>

   <span class="value">
				<span id="year13537086546263552Counting"></span>
				<span id="year13537086546263552CountingDescriber" class="describer">y
					<span class="describer-2nd">1
					<span class="describer-3rd">3
				<span class="describer-4th">5
					<span class="describer-5th">3
					<span class="describer-6th">7
				<span class="describer-7th">0
					<span class="describer-8th">8
					<span class="describer-9th">6
					<span class="describer-10th">5
					<span class="describer-11th">4
					<span class="describer-12th">6
					<span class="describer-13th">2
					<span class="describer-14th">6
					<span class="describer-15th">3
					<span class="describer-16th">5
					<span class="describer-17th">5
					<span class="describer-18th">2
     </span>
			</span>
	</span></span>
	</span></span></span>
	</span></span>
	</span></span>
	</span></span></span>
	</span></span>
	</span>
</span></span>

			</span>

   <span class="value">
				<span id="year218340105584896Counting"></span>
				<span id="year218340105584896CountingDescriber" class="describer">y
					<span class="describer-2nd">2
					<span class="describer-3rd">1
				<span class="describer-4th">8
					<span class="describer-5th">3
					<span class="describer-6th">4
				<span class="describer-7th">0
					<span class="describer-8th">1
					<span class="describer-9th">0
					<span class="describer-10th">5
					<span class="describer-11th">5
					<span class="describer-12th">8
					<span class="describer-13th">4
					<span class="describer-14th">8
					<span class="describer-15th">9
					<span class="describer-16th">6
			</span>
	</span></span>
	</span></span></span></span>
	</span></span></span>
	</span></span>
	</span></span>
	</span>
</span></span>

			</span>
			<!--
			:
		    -->
		    <span class="value">
				<span id="year3521614606208Counting"></span>
				<span id="year3521614606208CountingDescriber" class="describer">y
					<span class="describer-2nd">3
					<span class="describer-3rd">5</span>
				<span class="describer-4th">2
					<span class="describer-5th">1
					<span class="describer-6th">6</span>
				<span class="describer-7th">1
					<span class="describer-8th">4
					<span class="describer-9th">6
					<span class="describer-10th">0
					<span class="describer-11th">6
					<span class="describer-12th">2
					<span class="describer-13th">0
					<span class="describer-14th">8</span>
			</span>
	</span></span>
	</span></span>
	</span></span>
	</span></span>
	</span></span></span>

			</span>
			<!--
			:
		    -->
		    <span class="value">
				<span id="year56800235584Counting"></span>
				<span id="year56800235584CountingDescriber" class="describer">y
					<span class="describer-2nd">5
					<span class="describer-3rd">6</span>
				<span class="describer-4th">8
					<span class="describer-5th">0
					<span class="describer-6th">0</span>
				<span class="describer-7th">2
					<span class="describer-8th">3
					<span class="describer-9th">5
					<span class="describer-10th">5
					<span class="describer-11th">8
					<span class="describer-12th">4</span>
			</span>
	</span></span>
	</span></span>
	</span></span>
	</span></span></span>

			</span>

   <span class="value">
				<span id="year916132832Counting"></span>
				<span id="year916132832CountingDescriber" class="describer">y
					<span class="describer-2nd">9
					<span class="describer-3rd">1</span>
				<span class="describer-4th">6
					<span class="describer-5th">1
					<span class="describer-6th">3</span>
				<span class="describer-7th">2
					<span class="describer-8th">8
					<span class="describer-9th">3
					<span class="describer-10th">2</span>
			</span>
	</span></span>
	</span></span>
	</span></span></span>

 <span class="value">
				<span id="year14776336Counting"></span>
				<span id="year14776336CountingDescriber" class="describer">y
					<span class="describer-2nd">1
					<span class="describer-3rd">4</span>
				<span class="describer-4th">7
					<span class="describer-5th">7
					<span class="describer-6th">6</span>
				<span class="describer-7th">3
					<span class="describer-8th">3
					<span class="describer-9th">6</span>
			</span>
	</span></span>
	</span></span>
	</span>
			</span>

   <span class="value">
				<span id="year238328Counting"></span>
				<span id="year238328CountingDescriber" class="describer">y
					<span class="describer-2nd">2
					<span class="describer-3rd">3</span>
				<span class="describer-4th">8
					<span class="describer-5th">3
					<span class="describer-6th">2</span>
				<span class="describer-7th">8</span></span></span></span></span></span>

    <span class="value">
				<span id="year3844Counting"></span>
				<span id="year3844CountingDescriber" class="describer">y
					<span class="describer-2nd">3
					<span class="describer-3rd">8</span>
				<span class="describer-4th">4
					<span class="describer-5th">4</span>
			</span>
	</span>

			</span></span>
			<!--
			:
		    -->
		    <span class="value">
				<span id="year62Counting"></span>
				<span id="year62CountingDescriber" class="describer">y
					<span class="describer-2nd">6
					<span class="describer-3rd">2</span>
			</span>
	</span></span>
			<!--
			:
		    -->
		    <span class="value">
				<span id="daysHigherCounting"></span>
				<span id="daysHigherCountingDescriber" class="describer">d
					<span class="describer-2nd">h</span>

			</span></span>
			<!--
			:
		    -->
		    <span class="value">
				<span id="daysLowerCounting"></span>
				<span id="daysLowerCountingDescriber" class="describer">d
					<span class="describer-2nd">l</span>

			</span></span>
			<!--
			:
		    -->
		    <span class="value">
       <span id="hourCounting"></span>
       <span class="describer">h
        <span class="describer-2nd"></span>
       </span>
      </span>
			<!--
			:
		    -->
		    <span class="value">
				<span id="minuteCounting"></span>
				<span class="describer">m
        <span class="describer-2nd"></span>
       </span>
			</span>
			<!--
			:
		    -->
		 <span class="value">
				<span id="secondCounting"></span>
				<span class="describer">s
        <span class="describer-2nd"></span>
       </span>
			</span>
		</div>

		<!-- <script src="0-Z-Based-Clock.js"></script> -->
		
		<script src="0-Z-Clock.js"></script>

  <div id="dLogo">
   <div id="cube">
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
    <div class="plane"></div>
   </div>
  </div>

<script>

var counts = {
 year52036560683837100000: 0,
 year839299365868340200: 0,
 year13537086546263552: 0,
 year218340105584896: 0,
 year3521614606208: 0,
 year56800235584: 0,
 year916132832: 0,
 year14776336: 0,
 year238328: 0,
 year3844: 0,
 year62: 0,
 daysHigher: 0,
 daysLower: 0,
 hours: 0,
 minutes: 0,
 seconds: 0
}

function setCounts (years, days, hours, minutes, seconds) {
 if ( seconds ) { counts.seconds = seconds }
 if ( minutes ) { counts.minutes = minutes }
 if ( hours ) { counts.hours = hours }

 if ( days ) {
  counts.daysHigher = Math.floor(days / 62)
  counts.daysLower = Math.floor(days % 62)
 }

 if ( years ) {
  if (years < 62) {
   counts.year62 = years
  }

  if (years > 62 && years < 3844) {
   counts.year3844 = Math.floor(years / 62)
   counts.year62 = (years % 62)
  }
 }
}

var date = new Date()

setCounts(date.getYear() + 1900, 247, date.getHours(), date.getMinutes(), date.getSeconds())

var countTo3844Year = document.getElementById('countTo3844Year')


var ids = {
 year52036560683837100000Counting: document.getElementById('year52036560683837100000Counting'),
 year839299365868340200Counting: document.getElementById('year839299365868340200Counting'),
 year13537086546263552Counting: document.getElementById('year13537086546263552Counting'),
 year218340105584896Counting: document.getElementById('year218340105584896Counting'),
 year3521614606208Counting: document.getElementById('year3521614606208Counting'),
 year56800235584Counting: document.getElementById('year56800235584Counting'),
 year916132832Counting: document.getElementById('year916132832Counting'),
 year14776336Counting: document.getElementById('year14776336Counting'),
 year238328Counting: document.getElementById('year238328Counting'),
 year3844Counting: document.getElementById('year3844Counting'),
 year62Counting: document.getElementById('year62Counting'),
 daysHigherCounting: document.getElementById('daysHigherCounting'),
 daysLowerCounting: document.getElementById('daysLowerCounting'),
 hourCounting: document.getElementById('hourCounting'),
 minuteCounting: document.getElementById('minuteCounting'),
 secondCounting: document.getElementById('secondCounting')
}

var parts = [
 '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

function tickPartOfSecond () {
 if (counts.seconds === 59) { 
  counts.seconds = 0
  ids.secondCounting.innerText = parts[counts.seconds]
  if (counts.minutes === 59) {
   counts.minutes = 0
   ids.minuteCounting.innerText = parts[counts.minutes]
   if (counts.hours === 23) {
    counts.hours = 0
    ids.hourCounting.innerText = parts[counts.hours]
    if (counts.daysLower === 61) {
     counts.daysLower = 0
     ids.daysLowerCounting.innerText = parts[counts.daysLower]
     if (counts.daysHigher === 5) {
      counts.daysHigher = 0
      ids.daysHigherCounting.innerText = parts[counts.daysHigher]
      if (counts.daysLower === 54) {
       counts.daysLower = 0
       ids.daysLowerCounting.innerText = parts[counts.daysLower]
       counts.daysHigher = 0
       ids.daysHigher.innerText = parts[counts.daysHigher]
       if (counts.year62 === 61) {
        counts.year62 = 0
        ids.year62Counting.innerText = parts[counts.year62]
        if (counts.year3844 === 61) {
         counts.year3844 = 0
         ids.year3844Counting.innerText = parts[counts.year3844]
         if (counts.year238328 === 61) {
          counts.year238328 = 0
          ids.year238328Counting.innerText = parts[counts.year238328]
          if (counts.year14776336 === 61) {
           counts.year14776336 = 0
           ids.year14776336Counting.innerText = parts[counts.year14776336]
           if (counts.year916132832 === 61) {
            counts.year916132832 = 0
            ids.year916132832Counting.innerText = parts[counts.year916132832]
            if (counts.year56800235584 === 61) {
             counts.year56800235584 = 0
             ids.year56800235584Counting.innerText = parts[counts.year56800235584]
             if (counts.year3521614606208 === 61) {
              counts.year3521614606208 = 0
              ids.year3521614606208Counting.innerText = parts[counts.year3521614606208]
              if (counts.year218340105584896 === 61) {
               counts.year218340105584896 = 0
               ids.year218340105584896Counting.innerText = parts[counts.year218340105584896]
               if (counts.year13537086546263552 === 61) {
                counts.year13537086546263552 = 0
                ids.year13537086546263552Counting.innerText = parts[counts.year13537086546263552]
                if (counts.year839299365868340200 === 61) {
                 counts.year839299365868340200 = 0
                 if (counts.year52036560683837100000 === 61) {
                  for (let countOf in counts) {
                   counts[countOf] = 0
                   console.info("End of 0-Z Clock Reached. Reseting to 0.")
                  }
                 } else {
                  counts.year52036560683837100000++
                  ids.year52036560683837100000Counting.innerText = parts[counts.year52036560683837100000]
                 }
                } else {
                 counts.year839299365868340200++
                 ids.year839299365868340200Counting.innerText = parts[counts.year839299365868340200]
                }
               } else {
                counts.year13537086546263552++
                ids.year13537086546263552Counting.innerText = parts[counts.year13537086546263552]
               }
              } else counts.year218340105584896++
              ids.year218340105584896Counting.innerText = parts[counts.year218340105584896]
             } else {
              counts.year3521614606208++
              ids.year3521614606208Counting.innerText = parts[counts.year3521614606208]
             }
            } else {
             counts.year56800235584++
             ids.year916132832Counting.innerText = parts[counts.year916132832]
            }
           } else {
            counts.year916132832++
            ids.year916132832Counting.innerText = parts[counts.year916132832]
           }
          } else {
           counts.year14776336++
           ids.year14776336Counting.innerText = parts[counts.year14776336]
          }
         } else counts.year238328++
         ids.year238328Counting.innerText = parts[counts.year238328]
        } else {
         counts.year3844++
         ids.year3844Counting.innerText = parts[counts.year3844]
        }
       } else {
        counts.year62++
        ids.year62Counting.innerText = parts[counts.year62]
       }
      } else {
       counts.daysLower++
       ids.daysLowerCounting.innerText = parts[counts.daysLower]
      }
     } else {
      counts.daysHigher++
      ids.daysHigherCounting.innerText = parts[counts.daysHigher]
     }
    } else {
     counts.daysLower++
     ids.daysLowerCounting.innerText = parts[counts.daysLower]
    }
   } else {
    counts.hours++
    ids.hourCounting.innerText = parts[counts.hours]
   }
  } else {
   counts.minutes++
   ids.minuteCounting.innerText = parts[counts.minutes]
  }
 } else {
  counts.seconds++
  ids.secondCounting.innerText = parts[counts.seconds]
 }
}

ids.secondCounting.innerText = parts[counts.seconds]
ids.minuteCounting.innerText = parts[counts.minutes]
ids.hourCounting.innerText = parts[counts.hours]
ids.daysLowerCounting.innerText = parts[counts.daysLower]
ids.daysHigherCounting.innerText = parts[counts.daysHigher]
ids.year62Counting.innerText = parts[counts.year62]
ids.year3844Counting.innerText = parts[counts.year3844]
ids.year238328Counting.innerText = parts[counts.year238328]
ids.year14776336Counting.innerText = parts[counts.year14776336]
ids.year916132832Counting.innerText = parts[counts.year916132832]
ids.year56800235584Counting.innerText = parts[counts.year56800235584]
ids.year3521614606208Counting.innerText = parts[counts.year3521614606208]
ids.year218340105584896Counting.innerText = parts[counts.year218340105584896]
ids.year13537086546263552Counting.innerText = parts[counts.year13537086546263552]
ids.year839299365868340200Counting.innerText = parts[counts.year839299365868340200]
ids.year52036560683837100000Counting.innerText = parts[counts.year52036560683837100000]


window.setInterval(tickPartOfSecond, 1000)
</script>
	    
	</body>
</html>`

yhhd = require('http')

http.createServer(function(request, response) {
 response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`${serveMe}`);
  response.end();
}).listen(37891)