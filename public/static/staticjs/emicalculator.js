/******* Do not edit this file *******
Simple Custom CSS and JS - by Silkypress.com
Saved: Jun 20 2020 | 10:49:47 */

'use strict'

jQuery(function ($) {
  $.fn.emiculator = function (options) {
    function drawComponentsTable(data_obj, init_options) {
      var settings = init_options.settings
      var baseEl = init_options.baseEl
      var emi_data = data_obj.data_obj
      var heading = '<h4>' + settings.language.BREAKDOWN_TABLE_HEADING + '</h4>'
      var table =
        "<div class='breakdown-table-container'><table class='table table-striped'><tr><th>Principal</th><th class='text-center'>Interest</th><th  class='text-right'>Balance</th></tr>"
      var precision = settings.precision
      $(emi_data).each(function () {
        table += '<tr>'
        table += '<td>' + settings.currency + ' ' + Math.round(this[0].toFixed(precision)) + '</td>'
        table += "<td class='text-center'>" + settings.currency + ' ' + Math.round(this[1].toFixed(precision)) + '</td>'

        table += "<td class='text-right'>" + settings.currency + ' ' + Math.round(this[2].toFixed(precision)) + '</td>'
        table += '</tr>'
      })

      table += '</table></div>'
      $(baseEl + ' .emi-table-container').html(heading + table)
    }

    function updateDataInHTML(data, init_options) {
      var settings = init_options.settings
      var baseEl = init_options.baseEl
      $(baseEl + ' .emi-monthly').html(settings.currency + ' ' + data.emi)
      $(baseEl + ' .emi-total-interest').html(settings.currency + ' ' + data.total_interest)
      $(baseEl + ' .emi-total-payment').html(settings.currency + ' ' + data.total_payment)
      return true
    }

    function drawChart(data_obj, init_options) {
      var settings = init_options.settings
      var baseEl = init_options.baseEl
      var uniqId = init_options.uniqId

      $(baseEl + ' .emi-chart-container').addClass('col-md-4')
      if (typeof Chart == 'undefined') {
        $(baseEl + ' .emi-chart').html(' Please load the Chart.js. See documentation for options')
        return false
      }

      //remove old chart
      $('canvas#' + uniqId + '-emi-chart').remove()

      $(baseEl + ' .emi-chart').html('<canvas id="' + uniqId + '-emi-chart" width="240" height="240"></canvas>')
      var ctx = $('#' + uniqId + '-emi-chart')

      var data = {
        datasets: [
          {
            data: [data_obj.principal, data_obj.total_interest],
            backgroundColor: settings.backgroundColor,
            hoverBackgroundColor: settings.hoverBackgroundColor,
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ['Prinicpal Loan Amount', 'Total Interest'],
      }
      var options = []

      var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options,
      })
    }

    function drawCalcForm(init_options) {
      var settings = init_options.settings
      var baseEl = init_options.baseEl
      var uniqId = init_options.uniqId

      var html =
        // '   <h1>' +
        // settings.language.CALCULATOR_HEADING +
        // '</h1>   ' +
        '                         <div class="row d-flex flex-row justify-content-center align-items-center  ' +
        '                         emiculator-widget">  ' +
        '                            <div class="emi-calc-container col-md-4">    ' +
        '                             <p class="text-danger  validation-alert" ></p>    ' +
        '                                     <label  for="emi-principal">' +
        settings.language.LABEL_PRINICIPAL +
        '</label>  ' +
        '                                     <div class="input-group mb-3">  ' +
        '     ' +
        '                                       <div class="input-group-prepend">  ' +
        '                                         <span class="input-group-text"  >' +
        settings.currency +
        '</span>  ' +
        '                                       </div>   ' +
        '                                       <input type="number" class="form-control js-emic-var emi-principal" data-emic-id="emi-principal" value="' +
        settings.initPrincipal +
        '"  max="' +
        settings.maxPrincipal +
        '">   ' +
        '                                     </div>  ' +
        '                                      <label  for="emi-rate">' +
        settings.language.LABEL_RATE +
        '</label>  ' +
        '                                     <div class="input-group mb-3">  ' +
        '                                        ' +
        '                                       <div class="input-group-prepend">  ' +
        '                                         <span class="input-group-text"  >%</span>  ' +
        '                                       </div>   ' +
        '                                       <input type="number" class="form-control js-emic-var emi-rate"  data-emic-id="emi-rate" value="' +
        settings.initRate +
        '"  max="' +
        settings.maxRate +
        '">  ' +
        '                                          ' +
        '                                     </div>  ' +
        '                                     <div class="form-group">   ' +
        '                                       <label  for="emi-time">' +
        settings.language.LABEL_TIME +
        '</label>  ' +
        '                                       <input type="number" class="form-control js-emic-var js-time-type emi-time"  data-emic-id="emi-time" value="' +
        settings.initTime +
        '"  max="' +
        settings.maxTime +
        '">    ' +
        '                                     </div>  ' +
        '                                        ' +
        '                                    <div class="form-group">   ' +
        '                                      <div class="custom-control custom-radio d-inline-block my-1 mr-sm-2">  ' +
        '                                         <input type="radio" class="custom-control-input js-emic-radio-var js-time-type"  name="emi-time-type-' +
        uniqId +
        '"  value="months" data-emic-id="emi-time-type-months" checked id="emic-radio-months-' +
        uniqId +
        '">   ' +
        '                                         <label class="custom-control-label" for="emic-radio-months-' +
        uniqId +
        '">Months</label>  ' +
        '                                       </div>   ' +
        '                                       <div class="custom-control custom-radio d-inline-block my-1 mr-sm-2">  ' +
        '                                         <input type="radio" id="emic-radio-years-' +
        uniqId +
        '"  class="custom-control-input  d-inline-block js-emic-radio-var js-time-type"   name="emi-time-type-' +
        uniqId +
        '" value="years" data-emic-id="emi-time-type-years">   ' +
        '                                         <label class="custom-control-label" for="emic-radio-years-' +
        uniqId +
        '">Years</label>  ' +
        '                                       </div>   ' +
        '                                    </div>     ' +
        '                            </div>   ' +
        '                            <div class="emi-cal-results-container col-md-3">  ' +
        '                               <div class="emi-cal-results text-md-right">  ' +
        '                                  <div class=""><h6>' +
        settings.language.RESULTS_EMI_HEADING +
        '</h6>  ' +
        '                                     <h3 class="emi-monthly" data-emic-id="emi-payment">   ' +
        '                                        0  ' +
        '                                     </h3>   ' +
        '                                  </div>  ' +
        '                                  <div class=""><h6>' +
        settings.language.RESULTS_INTEREST_PAYABLE_HEADING +
        '</h6>  ' +
        '                                     <h3 class="emi-total-interest" data-emic-id="emi-total-interest">  ' +
        '                                         0  ' +
        '                                     </h3>   ' +
        '                                  </div>  ' +
        '                                  <div class=""><h6>' +
        settings.language.RESULTS_TOTAL_PAYABLE_HEADING +
        '</h6>  ' +
        '                                     <h3 class="emi-total-payment" data-emic-id="emi-total-payment">  ' +
        '                                         0  ' +
        '                                     </h3>   ' +
        '                                 </div>   ' +
        '                               </div>   ' +
        '                            </div>  ' +
        '                            <div class="emi-chart  emi-chart-container"  >   ' +
        '                            </div>  ' +
        '                              ' +
        '                            <div  class="emi-table-container col-md-12">  ' +
        '                            </div>     ' +
        '                        </div>  '

      $(baseEl).html(html)
      $(baseEl + ' .validation-alert').hide()
    }

    function calculateEMI(principal, rate_percent, time_in_months, precision) {
      var EMI
      var rate_per_month = rate_percent / 12 / 100 //divide the rate by 100 and 12
      var numr = Math.pow(1 + rate_per_month, time_in_months)
      var denr = Math.pow(1 + rate_per_month, time_in_months) - 1

      EMI = principal * rate_per_month * (numr / denr)

      //round the EMI to two decimal points
      EMI = EMI.toFixed(precision)

      var total_payment = EMI * time_in_months
      var total_interest = total_payment - principal

      var data_obj = []

      var principal_by_month = principal

      // loop through each month and calculate
      // each months principal component and the interest component

      for (var i = 1; i <= time_in_months; i++) {
        var each_months_principal, each_months_interest
        each_months_interest = principal_by_month * rate_per_month
        var principal_component = EMI - each_months_interest
        var interest_component = each_months_interest

        var balance_principal = principal_by_month - principal_component
        if (balance_principal < 0) {
          balance_principal = 0
        }
        var single_month_data = [principal_component, interest_component, balance_principal]
        data_obj.push(single_month_data)
        principal_by_month = principal_by_month - principal_component
      }

      var result = []
      result['principal'] = principal
      result['time_in_months'] = time_in_months
      result['rate_percent'] = rate_percent
      result['emi'] = EMI
      result['total_interest'] = total_interest.toFixed(precision)
      result['total_payment'] = total_payment.toFixed(precision)
      result['data_obj'] = data_obj

      return result
    }

    function init(init_options) {
      var settings = init_options.settings
      var baseEl = init_options.baseEl

      var principal, rate_percent, time
      var time_in_months

      var precision = settings.precision
      var showComponents = settings.showComponents
      var showChart = settings.showChart

      var time_type = $(baseEl + ' .js-time-type:checked').attr('value')

      principal = $(baseEl + ' .emi-principal').val()
      rate_percent = $(baseEl + ' .emi-rate').val()
      time = $(baseEl + ' .emi-time').val()

      if (principal == '' || rate_percent == '' || time == '') {
        return false
      }

      if (time_type == 'months') {
        time_in_months = time
        $(baseEl + ' .emi-time').attr('max', Math.round(settings.maxTime))
      } else if (time_type == 'years') {
        $(baseEl + ' .emi-time').attr('max', Math.round(settings.maxTime / 12))
        time_in_months = time * 12
      }

      var data = calculateEMI(principal, rate_percent, time_in_months, precision)

      updateDataInHTML(data, init_options)

      if (showComponents == true) {
        drawComponentsTable(data, init_options)
      }

      if (showChart == true) {
        drawChart(data, init_options)
      }
    }

    function getLanguageText(settings) {
      var language = {}
      language.LABEL_PRINICIPAL = 'Loan Amount'
      language.CALCULATOR_HEADING = 'EMI Calculator for Loans'
      language.LABEL_RATE = 'Loan Rate'
      language.LABEL_TIME = 'Loan Tenure'
      language.RESULTS_EMI_HEADING = 'Loan EMI'
      language.RESULTS_INTEREST_PAYABLE_HEADING = 'Total Interest Payable'
      language.RESULTS_TOTAL_PAYABLE_HEADING = 'Total Payment'
      language.BREAKDOWN_TABLE_HEADING = 'Monthly breakdown of EMI in <b>Principal</b> and <b>Interest</b> components'
      language.PRINCIPAL_ERROR =
        'The loan amount value is larger than the  allowed value. Max value is ' + settings.maxPrincipal
      language.RATE_ERROR = 'The loan rate  value is larger than the allowed value. Max value is ' + settings.maxRate
      language.TIME_ERROR =
        'The loan tenure   is longer than the allowed value. Max value is ' +
        settings.maxTime +
        ' months or ' +
        settings.maxTime / 12 +
        ' years'
      return language
    }

    return $(this).each(function () {
      var settings = $.extend(
        {
          currency: '<i class="fa fa-dollar-sign"></i>',
          precision: 2,
          showChart: true,
          showComponents: true,
          backgroundColor: ['#82c91e', '#fa5252'],
          hoverBackgroundColor: ['#74b816', '#f03e3e'],
          initPrincipal: 100000,
          maxPrincipal: 5000000,
          initRate: 8.5,
          maxRate: 20,
          initTime: 180,
          maxTime: 360,
        },
        options
      )

      var el = $(this)
      var language = getLanguageText(settings)
      settings.language = $.extend(language, options.language)

      var baseEl, uniqId

      if (el.attr('id') == undefined) {
        var timestamp = new Date().getTime()
        el.attr('id', 'emic-calculator-' + timestamp)
        baseEl = '#emic-calculator-' + timestamp
        uniqId = 'emic-calculator-' + timestamp
      } else {
        baseEl = '#' + el.attr('id')
        uniqId = el.attr('id')
      }

      var init_options = {
        settings: settings,
        baseEl: baseEl,
        uniqId: uniqId,
      }

      drawCalcForm(init_options)

      init(init_options)

      var baseEl = init_options.baseEl

      $('body').on('change', baseEl + ' .js-emic-var', function (e) {
        if ($(this).hasClass('emi-principal') == true) {
          if (parseInt($(this).val()) > parseInt(settings.maxPrincipal)) {
            $(this).val(settings.maxPrincipal)
            $(baseEl + ' .validation-alert')
              .show()
              .html(settings.language.PRINCIPAL_ERROR)
            return false
          }
        }

        if ($(this).hasClass('emi-rate') == true) {
          if (parseInt($(this).val()) > parseInt(settings.maxRate)) {
            $(this).val(settings.maxRate)
            $(baseEl + ' .validation-alert')
              .show()
              .html(settings.language.RATE_ERROR)
            return false
          }
        }

        if ($(this).hasClass('emi-time') == true) {
          if (parseFloat($(this).val()) > parseFloat($(this).attr('max'))) {
            $(this).val($(this).attr('max'))
            $(baseEl + ' .validation-alert')
              .show()
              .html(settings.language.TIME_ERROR)
            return false
          }
        }

        $(baseEl + ' .validation-alert').hide()

        init(init_options)
      })

      $('body').on('change', baseEl + ' .js-emic-radio-var', function () {
        var time_type = $(baseEl + ' .js-time-type:checked').attr('value')
        if (time_type == 'months') {
          $(baseEl + ' .emi-time').val(settings.maxTime)
          $(baseEl + ' .emi-time').attr('max', settings.maxTime)
        } else if (time_type == 'years') {
          $(baseEl + ' .emi-time').val(Math.round(settings.maxTime / 12))
          $(baseEl + ' .emi-time').attr('max', Math.round(settings.maxTime / 12))
        }
        init(init_options)
      })
    })
  }
})
jQuery(document).ready(function ($) {
  var id = $('.emic-calculator').attr('id')
  switch (id) {
    case 'home_indian':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 8.5,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Your Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Your Loan Rate',
          LABEL_TIME: 'Your Loan Tenure',
        },
      })
      break
    case 'personal_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Personal Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Personal Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Personal Loan interest Rate',
          LABEL_TIME: 'Personal Loan Tenure',
        },
      })
      break
    case 'student_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Student Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Student Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Student Loan Rate',
          LABEL_TIME: 'Student Loan Tenure',
        },
      })
      break
    case 'homeloan_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 500000,
        maxPrincipal: 10000000,
        initRate: 8,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Home Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Home Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Home Loan Rate',
          LABEL_TIME: 'Home Loan Tenure',
        },
      })
      break
    case 'education_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Education Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Education Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Education Loan Rate',
          LABEL_TIME: 'Education Loan Tenure',
        },
      })
      break
    case 'creditcard_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Credit Card Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Credit Card Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Credit Card Loan Rate',
          LABEL_TIME: 'Credit Card Loan Tenure',
        },
      })
      break
    case 'business_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 50000000,
        initRate: 11.2,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Business Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Business Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Business Loan Rate',
          LABEL_TIME: 'Business Loan Tenure',
        },
      })
      break
    case 'car_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 8.5,
        maxRate: 20,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Car Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Car Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Car Loan Rate',
          LABEL_TIME: 'Car Loan Tenure',
        },
      })
      break
    case 'auto_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Auto Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Auto Loan in India ' + new Date().getFullYear(),
          LABEL_RATE: 'Auto Loan Rate',
          LABEL_TIME: 'Auto Loan Tenure',
        },
      })
      break
    case 'bike_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Bike Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Bike Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Bike Loan Rate',
          LABEL_TIME: 'Bike Loan Tenure',
        },
      })
      break
    case 'EMI_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'EMI Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'EMI: Loan Rate',
          LABEL_TIME: 'EMI: Loan Tenure',
        },
      })
      break
    case 'gold_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Gold Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Gold Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Gold Loan Rate',
          LABEL_TIME: 'Gold Loan Tenure',
        },
      })
      break
    case 'installment_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Loan Amount is ',
          CALCULATOR_HEADING: 'Installment Calculator for Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Loan Rate for installment',
          LABEL_TIME: 'Loan Tenure for installment',
        },
      })
      break
    case 'interest_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Loan Amount is ',
          CALCULATOR_HEADING: 'Interest Calculator for Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Loan Rate ( interest )',
          LABEL_TIME: 'Loan Tenure',
        },
      })
      break
    case 'loan_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Loan Amount is ',
          CALCULATOR_HEADING: 'Loan Calculator for various loans in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Loan Rate',
          LABEL_TIME: 'Loan Tenure',
        },
      })
      break
    case 'loanrepayment_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Loan Amount is ',
          CALCULATOR_HEADING: 'Loan Repayment Calculator for Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Loan Rate',
          LABEL_TIME: 'Loan Tenure',
        },
      })
      break
    case 'preowned_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Preowned car Loan Amount is ',
          CALCULATOR_HEADING: 'loan calculator for Preowned car Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Preowned car Loan Rate',
          LABEL_TIME: 'Preowned car Loan Tenure',
        },
      })
      break
    case 'secondhand_car_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Second hand car Loan Amount is ',
          CALCULATOR_HEADING: 'Loan Calculator for Second hand car Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Second hand car Loan Rate',
          LABEL_TIME: 'Second hand car Loan Tenure',
        },
      })
      break
    case 'secondhand_bike_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Second hand bike Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Second hand cabiker Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Second hand bike Loan Rate',
          LABEL_TIME: 'Second hand bike Loan Tenure',
        },
      })
      break
    case 'twowheeler_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Two Wheeler Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Two Wheeler Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Two Wheeler Loan Rate',
          LABEL_TIME: 'Two Wheeler Loan Tenure',
        },
      })
      break
    case 'usedbike_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Used bike Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Used bike Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Used bike Loan Rate',
          LABEL_TIME: 'Used bike Loan Tenure',
        },
      })
      break
    case 'Usedcar_in':
      $('.emic-calculator').emiculator({
        currency: '<i class="fa fa-rupee-sign"></i>',
        precision: 2,
        showChart: true,
        showComponents: true,
        backgroundColor: ['#82c91e', '#fa5252'],
        hoverBackgroundColor: ['#74b816', '#f03e3e'],
        initPrincipal: 100000,
        maxPrincipal: 10000000,
        initRate: 10.5,
        maxRate: 22,
        initTime: 60,
        maxTime: 360,
        language: {
          LABEL_PRINICIPAL: 'Used car Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Used car Loan in India - ' + new Date().getFullYear(),
          LABEL_RATE: 'Used car Loan Rate',
          LABEL_TIME: 'Used car Loan Tenure',
        },
      })
      break

    default:
      $('.emic-calculator').emiculator({
        language: {
          LABEL_PRINICIPAL: 'Your Loan Amount is ',
          CALCULATOR_HEADING: 'EMI Calculator for Loans ',
        },
      })
  }
})