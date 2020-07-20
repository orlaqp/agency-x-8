<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">
        
    <#elseif section = "form">

        <img src="${url.resourcesPath}/${properties.kcLoginPageBackgroundImage}" alt="" class="ab-t-l-height" />
        <#--  <img class="${properties.kcLoginBackgroundImageClass}" src="${url.resourcesPath}/${properties.kcLoginBackgroundImage}" alt="" />          -->

        <div class="${properties.kcLoginClass!}">
            <div class="${properties.kcLoginFormContainerClass!}">    
                <div>
                    <div class="js-tilt" data-tilt>
                        <!-- <img src="images/013.png" alt="IMG"> -->
                        <img class="${properties.kcLoginIllustrationClass}" src="${url.resourcesPath}/${properties.kcSignupIllustration}" alt="IMG">
                    </div>
                </div>
                <div>
                    <form id="kc-register-form" class="${properties.kcFormClass!}" action="${url.registrationAction}" method="post">
                        <span class="login100-form-title">
                            New Member
                        </span>
                        
                        <!-- first name -->
                        <div class="wrap-input100 validate-input" data-validate = "First name is required">
                            <input id="firstName" class="input100" type="text" name="firstName" placeholder="First Name" value="${(register.formData.firstName!'')}">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </div>

                        <!-- <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('firstName',properties.kcFormGroupErrorClass!)}">
                            <div class="${properties.kcLabelWrapperClass!}">
                                <label for="firstName" class="${properties.kcLabelClass!}">${msg("firstName")}</label>
                            </div>
                            <div class="${properties.kcInputWrapperClass!}">
                                <input type="text" id="firstName" class="${properties.kcInputClass!}" name="firstName" value="${(register.formData.firstName!'')}" />
                            </div>
                        </div> -->
            
                        <!-- last name -->
                        <div class="wrap-input100 validate-input" data-validate = "Last name is required">
                            <input id="lastName" class="input100" type="text" name="lastName" placeholder="Last Name" value="${(register.formData.lastName!'')}">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </div>


                        <!-- <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('lastName',properties.kcFormGroupErrorClass!)}">
                            <div class="${properties.kcLabelWrapperClass!}">
                                <label for="lastName" class="${properties.kcLabelClass!}">${msg("lastName")}</label>
                            </div>
                            <div class="${properties.kcInputWrapperClass!}">
                                <input type="text" id="lastName" class="${properties.kcInputClass!}" name="lastName" value="${(register.formData.lastName!'')}" />
                            </div>
                        </div> -->

                        <!-- email -->

                        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input id="email" class="input100" type="text" name="email" placeholder="Email" value="${(register.formData.email!'')}" autocomplete="email">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
            
                        <!-- <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('email',properties.kcFormGroupErrorClass!)}">
                            <div class="${properties.kcLabelWrapperClass!}">
                                <label for="email" class="${properties.kcLabelClass!}">${msg("email")}</label>
                            </div>
                            <div class="${properties.kcInputWrapperClass!}">
                                <input type="text" id="email" class="${properties.kcInputClass!}" name="email" value="${(register.formData.email!'')}" autocomplete="email" />
                            </div>
                        </div> -->

                        <div class="divider"></div>

                        <!-- username -->


            
                      <#if !realm.registrationEmailAsUsername>

                        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input id="username" class="input100" type="text" name="username" placeholder="Email" value="${(register.formData.username!'')}" autocomplete="username">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <!-- <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('username',properties.kcFormGroupErrorClass!)}">
                            <div class="${properties.kcLabelWrapperClass!}">
                                <label for="username" class="${properties.kcLabelClass!}">${msg("username")}</label>
                            </div>
                            <div class="${properties.kcInputWrapperClass!}">
                                <input type="text" id="username" class="${properties.kcInputClass!}" name="username" value="${(register.formData.username!'')}" autocomplete="username" />
                            </div>
                        </div> -->

                      </#if>
            
                        <#if passwordRequired??>

                        <!-- password -->

                        <div class="wrap-input100 validate-input" data-validate = "Password is required">
                            <input id="password" class="input100" type="password" name="password" placeholder="Password" autocomplete="new-password">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <!-- <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('password',properties.kcFormGroupErrorClass!)}">
                            <div class="${properties.kcLabelWrapperClass!}">
                                <label for="password" class="${properties.kcLabelClass!}">${msg("password")}</label>
                            </div>
                            <div class="${properties.kcInputWrapperClass!}">
                                <input type="password" id="password" class="${properties.kcInputClass!}" name="password" autocomplete="new-password"/>
                            </div>
                        </div> -->

                        <!-- confirm password -->

                        <div class="wrap-input100 validate-input" data-validate = "Password is required">
                            <input id="password-confirm" class="input100" type="password" name="password-confirm" placeholder="Confirm Password">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
            
                        <!-- <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('password-confirm',properties.kcFormGroupErrorClass!)}">
                            <div class="${properties.kcLabelWrapperClass!}">
                                <label for="password-confirm" class="${properties.kcLabelClass!}">${msg("passwordConfirm")}</label>
                            </div>
                            <div class="${properties.kcInputWrapperClass!}">
                                <input type="password" id="password-confirm" class="${properties.kcInputClass!}" name="password-confirm" />
                            </div>
                        </div> -->

                        </#if>
            
                        <#if recaptchaRequired??>
                        <div class="form-group">
                            <div class="${properties.kcInputWrapperClass!}">
                                <div class="g-recaptcha" data-size="compact" data-sitekey="${recaptchaSiteKey}"></div>
                            </div>
                        </div>
                        </#if>
            
                        <!-- <div class="${properties.kcFormGroupClass!}"> -->
                            
                            <!-- signup button -->
                            
                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" type="submit">
                                    ${msg("doRegister")}
                                </button>                                    
                            </div>
            
                            <!-- <div id="kc-form-buttons" class="${properties.kcFormButtonsClass!}">
                                <input class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonBlockClass!} ${properties.kcButtonLargeClass!}" type="submit" value="${msg("doRegister")}"/>
                            </div> -->

                            <!-- signin link -->

                            <div class="text-center p-t-50">
                                <a class="txt2" href="${url.loginUrl}">
                                    ${kcSanitize(msg("backToLogin"))?no_esc}
                                    <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>

                            <!-- <div id="kc-form-options" class="${properties.kcFormOptionsClass!}">
                                <div class="${properties.kcFormOptionsWrapperClass!}">
                                    <span><a href="${url.loginUrl}">${kcSanitize(msg("backToLogin"))?no_esc}</a></span>
                                </div>
                            </div> -->

                        <!-- </div> -->
                    </form>
                </div>
            </div>
    
        </div>

        
    </#if>
</@layout.registrationLayout>
